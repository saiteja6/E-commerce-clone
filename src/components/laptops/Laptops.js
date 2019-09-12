import React, { Component } from 'react';
import { Card, Col, Row, Icon, Avatar } from 'antd';


export default class Laptops extends Component {
    render() {
        return (
            <div>
                <h1> Laptops </h1>



                <div style={{ background: '#ECECEC', padding: '10px' }}>
    <Row gutter={18}>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/msi.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/msurface.jpeg'}
      /> 
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/macpro.jpeg'}
      />
        }  
      />
      </Col>
      <Col span={6}>
      <Card bordered={false}
        cover={
        <img
        alt="example"
        src={'./Images/lenovo.jpeg'}
      />
        }  
      />
      </Col>
      
    
    </Row>
  </div>
          
            </div>
        )
    }
}

