import React  from 'react';
import './Profile.css';

import { Layout, Card} from 'antd';
import LinkHeader from './../Header/LinkHeader';

const { Content } = Layout;

class UserProfile extends React.Component{
  render(){
    return (
      <Layout>
      <LinkHeader boardUser={this.props.user === undefined ? '': this.props.user.userName}/>
      <Content className="profile-container">
      <div style={{ background: '#fff', padding: 24, minHeight: 400,marginTop:20 }}>
          <Card title="User Details"  style={{ width: 300 }}>
          </Card>
    </div>
    </ Content>
    </ Layout>
    )
  }
}


export default UserProfile;