import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export default (ComposedComponent) => {
  class Auth extends Component {
    static contextTypes = {
      router: PropTypes.object
    } 

    componentWillMount() {
      if(!this.props.authenticated) {
        this.props.history.push('/login')
      }
    }
 
    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
        this.props.history.push('/login')
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return { authenticated: state.user.authenticated }
  }

  return connect(mapStateToProps)(Auth)
}
