import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../../actions/User/UserActions";
import { PieChart, Pie, Legend } from "recharts";

class PieGraph extends React.Component {
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
    let data = [];
    if (
      this.props.monthlyAccumExpenses === undefined ||
      this.props.monthlyAccumExpenses === null
    ) {
      return this.state.data
    } else if (
      typeof this.props.monthlyAccumExpenses === "object" &&
      Object.keys(this.props.monthlyAccumExpenses).length === 0
    ) {
      return this.state.data
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
    const data02 = this.getDataArray();
    return (
      <PieChart width={800} height={400}>
        {/* <Pie
          data={data02}
          dataKey="totalPrice"
          cx={200}
          cy={200}
          // innerRadius={70}
          outerRadius={60}
          fill="#8884d8"
          label
        /> */}
        <Pie
          data={data02}
          dataKey="totalPrice"
          cx={200}
          cy={200}
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
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
)(PieGraph);
