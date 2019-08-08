import React from "react";
import "antd/dist/antd.css";
import "./Register.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import { Form, Input, Button, Layout, Card } from "antd";

const { Header, Content } = Layout;
const FormItem = Form.Item;

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.actions.signUp(values);
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
        </Header>
        <Content className="reg-container">
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            {/* style={{ width: 450 }} */}
            <Card title="SignUp" style={{ width: 450 }}>
              <Form onSubmit={this.handleSubmit}>
                <FormItem {...formItemLayout} label="E-mail">
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        type: "email",
                        message: "The input is not valid E-mail!"
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!"
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Password">
                  {getFieldDecorator("password", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your password!"
                      },
                      {
                        validator: this.validateToNextPassword
                      }
                    ]
                  })(<Input type="password" />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Confirm Password">
                  {getFieldDecorator("confirm", {
                    rules: [
                      {
                        required: true,
                        message: "Please confirm your password!"
                      },
                      {
                        validator: this.compareToFirstPassword
                      }
                    ]
                  })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label={<span>Username&nbsp;</span>}
                >
                  {getFieldDecorator("userName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your nickname!",
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem {...formItemLayout} label="First Name">
                  {getFieldDecorator("firstName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your firstname!",
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Last Name">
                  {getFieldDecorator("lastName", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your lastname!",
                        whitespace: true
                      }
                    ]
                  })(<Input />)}
                </FormItem>
                <FormItem {...tailFormItemLayout}>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </FormItem>
              </Form>
            </Card>
          </div>
        </Content>
      </Layout>
    );
  }
}

const Register = Form.create()(RegistrationForm);

//export default Register

const mapStatetToProps = state => {
  return { error: state.user.error };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  };
};

export default connect(
  mapStatetToProps,
  mapDispatchToProps
)(Register);
