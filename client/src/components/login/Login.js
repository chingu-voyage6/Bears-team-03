import React, { Component } from 'react';
import './Login.css'
import 'antd/dist/antd.css';
import { Form, Icon, Input, Button, Checkbox,Card, Layout } from 'antd';
import LoginForm from './LoginForm';
import PublicHeader from './../Header/PublicHeader';

const {Content} = Layout;



class Login extends Component{
    
  render() 
  {
  
    return (
      <Layout>
          <PublicHeader />
          <Content className="login-container">
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
       <Card title="Login"  style={{ width: 300 }}>
      
      <LoginForm />
  </Card>
     </div>
      </Content>
      </Layout>  
    );
  }
}



export default Login