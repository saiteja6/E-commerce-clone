import React, { Component } from 'react'

import { Card, Col, Row, Icon, Avatar } from 'antd';

export default class Fiction extends Component {
    render() {
        return (
            <div>
               <h1>Fiction</h1> 
               <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={18}>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/theAssociate.png'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/the_alchemist.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/the-kite-runner.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/the-adventures-of-sherlock-homes.jpeg'}
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
