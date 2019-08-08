import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";

class BarGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: "Food",
          totalPrice: 44
        },
        {
          name: "Transport",
          totalPrice: 55
        },
        {
          name: "Health",
          totalPrice: 77
        },
        {
          name: "Other",
          totalPrice: 99
        }
      ]
    };
  }

  getDataArray() {
    let data = [];
    if (
      this.props.monthlyAccumExpenses === undefined ||
      this.props.monthlyAccumExpenses === null
    ) {
      return this.state.data;
    } else if (
      typeof this.props.monthlyAccumExpenses === "object" &&
      Object.keys(this.props.monthlyAccumExpenses).length === 0
    ) {
      return this.state.data;
    } else {
      data = [
        {
          name: "Food",
          totalPrice:
            this.props.monthlyAccumExpenses["2"] !== undefined &&
            this.props.monthlyAccumExpenses["2"].totalPrice
        },
        {
          name: "Transport",
          totalPrice:
            this.props.monthlyAccumExpenses["0"] !== undefined &&
            this.props.monthlyAccumExpenses["0"].totalPrice
        },
        {
          name: "Health",
          totalPrice:
            this.props.monthlyAccumExpenses["1"] !== undefined &&
            this.props.monthlyAccumExpenses["1"].totalPrice
        },
        {
          name: "Other",
          totalPrice:
            this.props.monthlyAccumExpenses["3"] !== undefined &&
            this.props.monthlyAccumExpenses["0"].totalPrice
        }
      ];
    }
    return data;
  }

  render() {
    const data = this.getDataArray();
    return (
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        {/* <Tooltip /> */}
        <Legend />
        <Bar dataKey="totalPrice" stackId="a" fill="#82ca9d" />
      </BarChart>
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
)(BarGraph);
