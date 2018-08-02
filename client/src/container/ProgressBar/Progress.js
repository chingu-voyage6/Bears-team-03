import React from 'react';
import Progress from 'react-progressbar';
import 'antd/dist/antd.css';
import './progress.css'
import {Row,Col,Divider,Icon} from 'antd';


class ProgressLine extends React.Component{
  render(){
    return (
      <div>
        <Row>
          <Col span={3}>
        <span className="progress-font" >{this.props.name}</span>
        <Divider type="vertical" />
          </Col>
          <Col span={21}>
         <Progress completed={this.props.value} style={{ marginTop: '6px' }} className="container" color={this.props.color} />
        </Col>
        </Row>
      </div>
    )
  }
}

export default ProgressLine