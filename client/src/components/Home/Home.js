import React from "react";
import { Link } from "react-router-dom";
import {
  Layout,
  Card,
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
  Checkbox
} from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import "./Home.css";

const FormItem = Form.Item;
const mainback = require("../../images/Cutting-Expenses.gif");
const { Footer, Header } = Layout;

class HomeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      if (
        nextProps.error !== undefined ||
        typeof nextProps.error === "string"
      ) {
        this.setState({
          showError: true
        });
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        this.props.actions.signIn(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="home-container">
        <Header style={{ marginBottom: "unset" }} className="head" />
        <div className="login-container">
          <Row className="login-row">
            <Col span={12}>
              <Card title="Login" style={{ width: 300 }}>
                <Form
                  onSubmit={this.handleSubmit}
                  className="login-form form-style"
                >
                  <FormItem>
                    {getFieldDecorator("userName", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your username!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="user"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        placeholder="Username"
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator("password", {
                      rules: [
                        {
                          required: true,
                          message: "Please input your Password!"
                        }
                      ]
                    })(
                      <Input
                        prefix={
                          <Icon
                            type="lock"
                            style={{ color: "rgba(0,0,0,.25)" }}
                          />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator("remember", {
                      valuePropName: "checked",
                      initialValue: true
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a className="login-form-forgot" href="">
                      Forgot password
                    </a>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                    >
                      Log in
                    </Button>
                    Or <Link to={`/register`}>Register</Link>
                  </FormItem>
                </Form>
              </Card>
            </Col>
            <Col span={12}>
              <img src={mainback} alt="my-home-icon" className="home-view" />
            </Col>
            {/* {this.state.showError === true ? (
              <Col>
                <p>{this.props.error}</p>
              </Col>
            ) : (
              ""
            )} */}
          </Row>
        </div>
        <Footer className="foot" style={{ textAlign: "center" }}>
          ChinguVoyage Bears3 Design ©2016 Created with by Ant UED
        </Footer>
      </div>
    );
  }
}
const Home = Form.create()(HomeForm);

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
)(Home);
