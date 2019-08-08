import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Background from "../../images/phone.svg";
import { Layout} from "antd";


class LandinPage extends React.Component {
  render() {
    const divStyle = {
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${Background})`,
      backgroundRepeat: `no-repeat`,
      backgroundOrigin: 'content-box',
      backgroundPosition: 'center',
      backgroundSize: "auto",
      backgroundAttachment: 'fixed',
      opacity: "0.5"
    };
    
   const headerStyle = {

   }

    return (
      <div>
        <Layout className="landing">
          <div  className="landing-content">
                  <div className="landing-image" style={divStyle}>
                  </div>
                  <button
                    className="create-button"
                    style={{
                      backgroundColor: "#001529",
                      color: "white",
                      padding: "10px",
                      width: "20vw",
                      fontSize: "30px",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      borderRadius: "4px",
                      zIndex: "10",
                      position: "absolute"
                    }}
                  >
                    <Link to={`/home`} style={{ color: "white" }}>Create Expense</Link>
                  </button>
          </div>
        </Layout>
      </div>
    );
  }
}

export default LandinPage;
