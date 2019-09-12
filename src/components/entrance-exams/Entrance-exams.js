import React, { Component } from 'react'

import { Card, Col, Row, Icon, Avatar } from 'antd';

export default class EntranceExams extends Component {
    render() {
        return (
            <div>
              <h1>Entrance-exams</h1>  
              <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={18}>
      <Col span={6}>
      
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/Indian-polity.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/engineering-entrance.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/gre.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/cat.jpeg'}
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
