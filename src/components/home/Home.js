import React, {Component} from 'react';
import { Col, Row, Card, Icon, Avatar } from 'antd';


const data = [
  {
    title: "Title 1",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 2",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 3",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 4",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 5",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 6",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
  {
    title: "Title 7",
    src: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
  },
]


class Homecontent extends Component {
  render() {
    return(
      <div>
      <div style={{ background: '#ececec', padding: '10px', display: "inline-block" }}>
        <Col span={4}>
        
        {
          data.map((item, index) => {
            return (
              <img alt={item.title}
                  src={item.src}
                />
          )
          })
  } 
        
        </Col>
      
    </div>
    </div>
);
      }
    }

export default Homecontent;    

          

