import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import { Table } from "antd";
import "./BoardExpenseTable.css";

const columns = [
  {
    title: "Food",
    className: "column-money",
    dataIndex: "food"
  },
  {
    title: "Transport",
    className: "column-money",
    dataIndex: "transport"
  },
  {
    title: "Health",
    className: "column-money",
    dataIndex: "health"
  },
  {
    title: "Other",
    className: "column-money",
    dataIndex: "other"
  }
];

class MonthlyExpenseAccumulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 1,
          food: 55,
          transport: 77,
          health: 44,
          other: 99
        }
      ]
    };
  }

  getDataArray() {
    let data = [{}];
    if (
      this.props.monthlyAccumExpenses === undefined ||
      this.props.monthlyAccumExpenses === null
    ) {
      return this.state.data;
    } else if (
      typeof this.props.monthlyAccumExpenses === "object" &&
      Object.keys(this.props.monthlyAccumExpenses).length === 0
    ) {
      this.state.data;
    } else {
      const key = 1;
       data = [
        {
          key: key,
          food:
            this.props.monthlyAccumExpenses["2"] !== undefined &&
            this.props.monthlyAccumExpenses["2"].totalPrice,
          transport:
            this.props.monthlyAccumExpenses["0"] !== undefined &&
            this.props.monthlyAccumExpenses["0"].totalPrice,
          health:
            this.props.monthlyAccumExpenses["1"] !== undefined &&
            this.props.monthlyAccumExpenses["1"].totalPrice,
          other:
            this.props.monthlyAccumExpenses["3"] !== undefined &&
            this.props.monthlyAccumExpenses["0"].totalPrice
        }
      ];
      return data;
    }
  }

  render() {
    const data = this.getDataArray();
    return (
      <div>
        <h4>Monthly Expense Accumulator</h4>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
    );
  }
}

const mapStatetToProps = state => {
  return {
    monthlyAccumExpenses: state.user.monthAccumulatedExpenses
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
)(MonthlyExpenseAccumulator);
