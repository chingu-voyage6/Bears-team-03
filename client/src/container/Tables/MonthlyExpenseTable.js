
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions';
import { Table,Layout } from 'antd';
import LinkHeader from '../Header/LinkHeader';

const {Content} = Layout;

const columns = [{
  title: 'Date',
  className: 'column-1',
  dataIndex: 'date',
},{
  title: 'Description',
  className: 'column-2',
  dataIndex: 'name',
},{
  title: 'Paid With',
  className: 'column-3',
  dataIndex: 'paidWith',
},{
  title: 'Amount',
  className: 'column-4',
  dataIndex: 'amount',
},{
  title: 'Category',
  className: 'column-5',
  dataIndex: 'category',
}
];


  class MonthlyExpenseTable extends React.Component{

    componentWillMount() {
      this.props.actions.listMonthExpense();
  
    }

    getDataArray(){
      
    if(this.props.tableData === undefined){
       
    }else{
      const dataArray = this.props.tableData.response;
     const data = dataArray.map((element,index) => {
        let output = {};
        let trueIndex = index + 1;   
        
        let key = trueIndex;
        let date = element.date;
        let name = element.name;
        let amount = element.amount;
        let category = element.category;
        output.key = key;
        output.date = date;
        output.name = name;
        output.amount = amount;
        output.category = category;
      
       return output;
       
   });
      return data
    }
   
  };

 

    render(){
      const data = this.getDataArray();   

      return (
        <Layout>
        <LinkHeader boardUser={this.props.user === undefined ? '': this.props.user.userName}/>
        <Content className="reg-container" >
        <div style={{ background: '#fff', padding: 24, minHeight: 400,marginTop:20 }}>
      
        <Table columns={columns} 
        dataSource={data} 
         />
      </div>
      </ Content>
      </ Layout>
      )
    }
  }


const mapStatetToProps = (state) => {

  return { 
    tableData: state.user.table
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(MonthlyExpenseTable)