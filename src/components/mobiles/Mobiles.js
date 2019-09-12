import React, { Component } from 'react'

import { Card, Col, Row, Icon, Avatar } from 'antd';

export default class Mobiles extends Component {
    render() {
        return (
            <div>
               <h1>Mobiles</h1> 
               <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={18}>
      <Col span={6}>
      
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/applexr.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/mia3.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/pocof1.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/sm40.jpeg'}
      />
        }  
      />
      </Col>
    </Row>
  </div>
          
            </div>
        );
    }
}
