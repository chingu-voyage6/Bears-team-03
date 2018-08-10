import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css'
import Background from '../../images/phone.svg'
import { Layout, Button, Row, Col } from 'antd';
import PublicHeader from '../Header/PublicHeader';


const {Content, Footer} = Layout;

class LandinPage extends React.Component{
  render(){
    const divStyle = {
      background: '#fff', 
      minHeight: 800,
      backgroundImage : `url(${Background})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: 'cover',
      // backgroundAttachment: 'fixed',
      margin: -20,
      
    }
    // style={{top:350, left:110, backgroundColor:'#001529', borderColor:'#001529'}}
    return (
      <div>
       <PublicHeader style={{height: 100, marginBottom:0}} />
      <Layout>
      
          <div style={divStyle}>
            <Row >
                <Col span={4} col-offset-4>
                <div className="expense-button">
                <Button type="primary" style={{ backgroundColor:'#001529', borderColor:'#001529'}}>
                   <Link to={`/home`}>Create Expense</Link></Button> </div>
                </Col>
                
            </Row>
             {/* <Button type="primary" style={{ backgroundColor:'#001529', borderColor:'#001529'}}>
             <Link to={`/home`}>Create Expense</Link></Button> */}
          </div>
 
     
      
      </Layout>
      <Footer style={{ textAlign: 'center', bottom:0, right:0, left:0, height: 100}}>
      ChinguVoyage Bears3 Design ©2016 Created with by Ant UED
       </Footer>
      </div>
    )
  }
}

export default LandinPage;