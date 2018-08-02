import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css'
import Background from '../../images/phone.svg'
import { Layout, Button } from 'antd';
import PublicHeader from '../Header/PublicHeader';


const {Content, Footer} = Layout;

class LandinPage extends React.Component{
  render(){
    const divStyle = {
       background: '#fff', 
       padding: 0, 
       minHeight: 700,
      backgroundImage : `url(${Background})`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: 'cover',
       //backgroundPosition: 'center'
    //  backgroundAttachment:`fixed`,
      margin:-15
    }
    return (
      <Layout>
      <PublicHeader />
      
        {/* <Content > */}
          <div style={divStyle}>
             <Button type="primary" style={{top:350, left:110, backgroundColor:'#001529', borderColor:'#001529'}}>
             <Link to={`/home`}>Create Expense</Link></Button>
          </div>
        {/* </Content> */}
     
      <Footer style={{ textAlign: 'center', bottom:0}}>
            ChinguVoyage Bears3 Design ©2016 Created with by Ant UED
      </Footer>
      </Layout>
    )
  }
}

export default LandinPage;