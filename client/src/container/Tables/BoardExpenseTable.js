import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions  from '../../actions/User/UserActions'
import { Table } from 'antd';
import './BoardExpenseTable.css';

const columns = [{
  title: 'Food',
  className: 'column-money',
  dataIndex: 'food',
},{
  title: 'Transport',
  className: 'column-money',
  dataIndex: 'transport',
},{
  title: 'Health',
  className: 'column-money',
  dataIndex: 'health',
},{
  title: 'Other',
  className: 'column-money',
  dataIndex: 'other',
}];


  class MonthlyExpenseAccumulator extends React.Component{
     

   getDataArray(){
    const data = [{}];
  if(this.props.monthlyAccumExpenses === undefined){
     
  }else{

    const key = 1;
    const transport= this.props.monthlyAccumExpenses["0"].totalPrice;
    const health = this.props.monthlyAccumExpenses["1"].totalPrice;
    const food = this.props.monthlyAccumExpenses["2"].totalPrice;
    const other = this.props.monthlyAccumExpenses["3"].totalPrice;
    const data = [{
      key: key,
      food: food,
      transport: transport,
      health: health,
      other: other
    }
    ]
    return data
  }
 
};
    

    render(){
  
    const data =  this.getDataArray();
      return (
        <div>
        <h4>Monthly Expense Accumulator</h4>
        <Table columns={columns} 
        dataSource={data} 
        size="middle" />
        </div>
      )
    }
  }



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

export default connect(mapStatetToProps, mapDispatchToProps)(MonthlyExpenseAccumulator)


