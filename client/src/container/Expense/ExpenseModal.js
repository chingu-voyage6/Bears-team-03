import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/User/UserActions';
import ExpenseModalForm from './ExpenseModelForm';



class ExpenseModalButton extends React.Component {

  showModal = () => {

    this.props.actions.showExpenseModal(true)
  }

  handleCancel = () => {
   this.props.actions.showExpenseModal(false)
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.actions.addExpense(values)
      form.resetFields();
      this.props.actions.showExpenseModal(false)
    });
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <span onClick={this.showModal}>Add Expense</span>
        <ExpenseModalForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.props.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}


const mapStatetToProps = (state) => {
  return { 
    error: state.user.error,
    user: state.user.user,
    visible: state.user.visible
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  }
}

export default connect(mapStatetToProps, mapDispatchToProps)(ExpenseModalButton)

