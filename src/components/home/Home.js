
import React from 'react';



import { Card, Col, Row } from 'antd';

class Home extends React.Component {
  render() {
    return(
      <div style={{ background: '#ECECEC', padding: '10px' }}>
      <Row gutter={18}>
        <Col span={6}>
        
        <Card title="Card title" bordered={false}
          cover={
          <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
          }  
        />
        </Col>
        <Col span={6}>
        <Card title="Card title" bordered={false}
          cover={
          <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
          }  
        />
        </Col>
        <Col span={6}>
        <Card title="Card title" bordered={false}
          cover={
          <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
          }  
        />
        </Col>
        <Col span={6}>
        <Card title="Card title" bordered={false}
          cover={
          <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
          }  
        />
        </Col>
      </Row>
    </div>
);
      }
    }

export default Home;    

          

