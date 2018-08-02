import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


//label={<CustomBarLabel />}

// const data = [
//      {name: 'Page A', uv: 4000, female: 2400, male: 2400},
//       {name: 'Page B', uv: 3000, female: 1398, male: 2210},
//       {name: 'Page C', uv: 2000, female: 9800, male: 2290},
//       {name: 'Page D', uv: 2780, female: 3908, male: 2000},
//       {name: 'Page E', uv: 1890, female: 4800, male: 2181},
//       {name: 'Page F', uv: 2390, female: 3800, male: 2500},
//       {name: 'Page G', uv: 3490, female: 4300, male: 2100},
// ];


class BarGraph extends React.Component{
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
      <BarChart width={600} height={300} data={data}
      margin={{top: 20, right: 30, left: 20, bottom: 5}}
      >
       <CartesianGrid strokeDasharray="3 3"/>
      <XAxis dataKey="name"  />
     <YAxis />
     <Tooltip/>
       <Legend />
       {/*<Bar dataKey="female" stackId="a" fill="#8884d8" />*/}
       <Bar dataKey="totalPrice" stackId="a" fill="#82ca9d" />
       {/*<Bar dataKey="uv" fill="#ffc658"/>*/}
     </BarChart>
    )
  }
}

//export default BarGraph;

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

export default connect(mapStatetToProps, mapDispatchToProps)(BarGraph)