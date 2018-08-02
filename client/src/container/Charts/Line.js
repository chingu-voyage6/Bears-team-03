import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions'
import {LineChart, Line, XAxis, YAxis, 
  CartesianGrid, Tooltip, Legend} from 'recharts';
import './Line.css'



class LineGraph extends React.Component{


 getDataArray(){
    const data = [];
  if(this.props.monthlyAccumExpenses === undefined){
     
  }else{

    const data = [
  {
    name: "Food",
    totalPrice: this.props.monthlyAccumExpenses["2"].totalPrice
  },
  {
    name: "Transport",
    totalPrice: this.props.monthlyAccumExpenses["0"].totalPrice
  },
  {
    name: "Health",
    totalPrice: this.props.monthlyAccumExpenses["1"].totalPrice
  },
  {
    name: "Other",
    totalPrice: this.props.monthlyAccumExpenses["3"].totalPrice
  }
]

    return data
  }
 
};

  render(){
    const data = this.getDataArray();
    return (
      <LineChart width={500} height={300} data={data}
      margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Tooltip/>
      <Legend />
       {/* <Line type="monotone" dataKey="BMI" stroke="#8884d8" /> */}
      <Line type="monotone" dataKey="totalPrice" stroke="#82ca9d" />
    </LineChart>
    )
  }
}


const mapStatetToProps = (state) => {
  //console.log('state at line', state.user)
  return { 
    monthlyAccumExpenses: state.user.monthAccumulatedExpenses
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(LineGraph)
