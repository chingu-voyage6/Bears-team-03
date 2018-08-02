import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions';
import LineGraph from './../../container/Charts/Line';
import PieGraph from './../../container/Charts/Pie';
import BarGraph from './../../container/Charts/Bar';

class GraphDisplay extends React.Component{

//   getDataArray(){
//     const data = [];
//   if(this.props.monthlyAccumExpenses === undefined){
     
//   }else{

//     const data = [
//   {
//     name: "Food",
//     totalPrice: this.props.monthlyAccumExpenses["2"].totalPrice
//   },
//   {
//     name: "Transport",
//     totalPrice: this.props.monthlyAccumExpenses["0"].totalPrice
//   },
//   {
//     name: "Health",
//     totalPrice: this.props.monthlyAccumExpenses["1"].totalPrice
//   },
//   {
//     name: "Other",
//     totalPrice: this.props.monthlyAccumExpenses["3"].totalPrice
//   }
// ]

//     return data
//   }
 
// };
 
  getChart(data){
      
      switch (data) {
        case 'line':
          return < LineGraph  />
          case 'pie':
          return < PieGraph />
          case 'bar':
          return < BarGraph />
          default:
          return < LineGraph />
      }
  }

  render(){
      return (
        <div> 
          {this.getChart(this.props.menu)}
        </div>
      )
  }

}

const mapStatetToProps = (state) => {
  console.log('state at graph', state.user)
  return { 
    monthlyAccumExpenses: state.user.monthAccumulatedExpenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(GraphDisplay)

//export default GraphDisplay;
