import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions'
import {PieChart, Pie, Legend} from 'recharts';


//label={<CustomBarLabel />}

// const data01 = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
//                   {name: 'Group C', value: 300}, {name: 'Group D', value: 200}]

// const data02 = [{name: 'A1', value: 100},
//                     {name: 'A2', value: 300},
//                    {name: 'B1', value: 100},
//                    {name: 'B2', value: 80},
//                    {name: 'B3', value: 40},
//                    {name: 'B4', value: 30},
//                    {name: 'B5', value: 50},
//                   {name: 'C1', value: 100},
//                   {name: 'C2', value: 200},
//                    {name: 'D1', value: 150},
//                    {name: 'D2', value: 50}]

//use card frequency as data 02


class PieGraph extends React.Component{

  getDataArray(){
    const data = [];
  if(this.props.monthlyAccumExpenses === undefined){
     
  }else{

    const data = [
  {
    name: "Food",
    value: this.props.monthlyAccumExpenses["2"].totalPrice
  },
  {
    name: "Transport",
    value: this.props.monthlyAccumExpenses["0"].totalPrice
  },
  {
    name: "Health",
    value: this.props.monthlyAccumExpenses["1"].totalPrice
  },
  {
    name: "Other",
    value: this.props.monthlyAccumExpenses["3"].totalPrice
  }
]

    return data
  }
 
};

  render(){
    const data02 = this.getDataArray();
    return (
      <PieChart width={800} height={400}>
        {/*<Pie data={data01} cx={200} cy={200} outerRadius={60} fill="#8884d8"/>*/}
        <Pie data={data02} cx={200} cy={200} innerRadius={70} outerRadius={90} fill="#82ca9d" label/>
       </PieChart>

    )
  }
}

//export default PieGraph;

const mapStatetToProps = (state) => {
  return { 
    monthlyAccumExpenses: state.user.monthAccumulatedExpenses
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(PieGraph)