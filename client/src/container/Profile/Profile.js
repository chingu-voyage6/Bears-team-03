import React  from 'react';
import { Link } from 'react-router-dom'
//import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions'
import { Layout} from 'antd';
import LinkHeader from './../Header/LinkHeader';

const { Content } = Layout;

class UserProfile extends React.Component{
  render(){
    return (
      <Layout>
      <LinkHeader boardUser={this.props.user === undefined ? '': this.props.user.userName}/>
      <Content >
      <div style={{ background: '#fff', padding: 24, minHeight: 400,marginTop:20 }}>
   
       
    </div>
    </ Content>
    </ Layout>
    )
  }
}


export default UserProfile;