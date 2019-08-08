import React from "react";
import "./Dashboard.css";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import { Layout, Divider, Row, Col, Card } from "antd";
import TimeLiner from "../../container/Timeline/TimeLiner";
import AuxComp from "./../../hoc/AuxComp/AuxComp";
import UserBoardHeader from "./../../container/Header/BoardHeader";
import GraphDisplay from "./../Graph/GraphDisplay";
import Day from "./../Moment/Day";
import MonthlyExpenseAccumulator from "../../container/Tables/BoardExpenseTable";

const { Content, Footer } = Layout;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.userDashboard();
  }

  getUserName() {
    if (!this.state.user.user === undefined) {
      console.log("not rendered yet");
    }
    console.log("rendered", this.state.user.user.userName);
  }

  render() {
    return (
      <AuxComp>
        <Layout className="dashboard-container">
          <UserBoardHeader
            boardUser={
              this.props.user === undefined ? "" : this.props.user.userName
            }
          />
          <Content style={{ padding: "0 50px", marginTop: 64 }}>
            <br />
            <br />
            <div
              style={{
                background: "#fff",
                padding: 24,
                minHeight: 380,
                overflow: "hidden",
                marginBottom: "50px",
                boxShadow: "1px 1px 11px rgba(0, 0, 0, 0.198)"
              }}
            >
              <Row>
                <Col span={12}>
                  <GraphDisplay menu={this.props.graph} />
                </Col>
                <Col span={12} style={{ marginTop: "-20px" }}>
                  <Divider orientation="left">
                    {" "}
                    <Day />
                  </Divider>
                  <Card style={{ padding: "3px" }}>
                    <MonthlyExpenseAccumulator />
                  </Card>
                  <Card>
                    <TimeLiner />
                  </Card>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            ChinguVoyage Bears3 Design ©2016 Created with by Ant UED
          </Footer>
        </Layout>
      </AuxComp>
    );
  }
}

const mapStatetToProps = state => {
  // console.log('monthly at board: ', monthlyAccumExpenses)
  return {
    user: state.user.user,
    monthlyAccumExpenses: state.user.monthAccumulatedExpenses,
    incomes: state.incomes,
    graph: state.user.graph
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign(userActions), dispatch)
  };
};

export default connect(
  mapStatetToProps,
  mapDispatchToProps
)(Dashboard);
