import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import "./Line.css";

class LineGraph extends React.Component {
  constructor(props){
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
    }
  }
  getDataArray() {
    let localData = []
    if (
      this.props.monthlyAccumExpenses === undefined ||
    this.props.monthlyAccumExpenses === null
    ) {
      localData = this.state.data
    } else if (
      typeof this.props.monthlyAccumExpenses === "object" &&
      Object.keys(this.props.monthlyAccumExpenses).length === 0
    ) {
      localData = this.state.data
    } else {
      localData = [
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
            this.props.monthlyAccumExpenses["3"].totalPrice
        }
      ];
    }
    return localData;
  }

  render() {
    const data = this.getDataArray();
    return (
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        {/* <Tooltip /> */}
        <Legend />
        <Line type="monotone" dataKey="totalPrice" stroke="#82ca9d" />
      </LineChart>
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
)(LineGraph);
