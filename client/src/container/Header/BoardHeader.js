import React from "react";
import { Link } from "react-router-dom";
import "./BoardHeader.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import { Menu, Icon, DatePicker } from "antd";
import ExpenseModalButton from "../Expense/ExpenseModal";
import moment from "moment";

const SubMenu = Menu.SubMenu;
const dateFormat = "YYYY/MM/DD";

class UserBoardHeader extends React.Component {
  lineClick(e) {
    this.props.actions.dashBoardHeader("line");
  }

  pieClick(e) {
    this.props.actions.dashBoardHeader("pie");
  }

  barClick(e) {
    this.props.actions.dashBoardHeader("bar");
  }

  render() {
    return (
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <Menu.Item key="1">
            <span>Home</span>
          </Menu.Item>

          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="pie-chart" />
                <span>Charts</span>
              </span>
            }
          >
            <Menu.Item key="1" onClick={e => this.lineClick(e)}>
              <Icon type="line-chart" />
              line-chart
            </Menu.Item>
            <Menu.Item key="2" onClick={e => this.pieClick(e)}>
              <Icon type="pie-chart" />
              pie-chart
            </Menu.Item>
            <Menu.Item key="3" onClick={e => this.barClick(e)}>
              <Icon type="bar-chart" />
              bar-chart
            </Menu.Item>
          </SubMenu>

          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="down-square-o" />
                <span>Expense</span>
              </span>
            }
          >
            <Menu.Item key="10">Monthly Budget Overview</Menu.Item>
            <Menu.Item key="11">
              <Link to={`/expensetable`}>Monthly Expense Overview</Link>
            </Menu.Item>
            <Menu.Item key="12">Budget Allocator</Menu.Item>
            <Menu.Item key="13">Earnings</Menu.Item>
          </SubMenu>
          <Menu.Item key="13" style={{ float: "right" }}>
            <Link to={`/`}>
              <Icon type="poweroff" />
              Logout
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub4"
            className="to-profile"
            style={{ float: "right" }}
            title={
              <Link to={`/profile`}>
                <span style={{ color: "white" }}>
                  <Icon type="user" />
                  <span>{this.props.boardUser}</span>
                </span>
              </Link>
            }
          />
          <SubMenu
            key="sub5"
            title={
              <span>
                <span>Timeline</span>
              </span>
            }
          />
          <SubMenu
            key="sub6"
            style={{ float: "right" }}
            title={
              <span>
                <DatePicker
                  defaultValue={moment("2015/01/01", dateFormat)}
                  format={dateFormat}
                />
              </span>
            }
          />

          <SubMenu
            key="sub7"
            style={{ float: "right" }}
            title={
              <span>
                <ExpenseModalButton />
              </span>
            }
          />
        </Menu>
    );
  }
}

const mapStatetToProps = state => {
  console.log(" state at header", state);
  return { user: state.user.user };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  };
};

export default connect(
  mapStatetToProps,
  mapDispatchToProps
)(UserBoardHeader);
