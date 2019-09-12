import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import Login from '../login/login';
import Homecontent from '../home/Home';
import Carouselism from '../carousel/Carousel';
import Cart from '../cart/Cart';


const { SubMenu } = Menu;
const { Header, Content } = Layout;
const menu = (
  <Menu>
    <SubMenu title="Electronics">
      <Menu.Item>Laptops</Menu.Item>
      <Menu.Item>Mobiles</Menu.Item>
    </SubMenu>
    <SubMenu title="Books">
      <Menu.Item>Fiction</Menu.Item>
      <Menu.Item>Entrance Exams</Menu.Item>
    </SubMenu>
  </Menu>
);


class Navbar extends React.Component {
  render() {
    return(
  <div>
  <Layout>
    <Header className="header">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'}}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Dropdown overlay={menu} key="2">
          <a className="ant-dropdown-link" href="#">
              Shop by Category <Icon type="down" />
           </a>
        </Dropdown>
        <Menu.Item key="3" style={{float:'right'}}><Login/></Menu.Item>

        <Menu.Item key="4" style={{float:'right'}}><Cart/></Menu.Item>
      
      </Menu>
    </Header>
    
      <Layout style={{ padding: '0 24px 24px' }}>
        
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Carouselism />
       
          <Homecontent />
        </Content>
    </Layout>
  </Layout>
  </div>
);
        }
      }
export default Navbar;