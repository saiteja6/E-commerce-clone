import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import Login from '../login/login';
import Homecontent from '../home/Home';
import Carouselism from '../carousel/Carousel';


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

  <Login />
  <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Shop by Category</Menu.Item>
        <Dropdown overlay={menu}>
  <a className="ant-dropdown-link" href="#">
    Shop by C <Icon type="down" />
  </a>
</Dropdown>


 
  
        <Menu.Item key="3">Login & Signup</Menu.Item>

        <Menu.Item key="4">Cart</Menu.Item>

       
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
          Content
          <Carouselism />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Homecontent />
        </Content>
      {/* </Layout> */}
    </Layout>
  </Layout>
  </div>
);
        }
      }
export default Navbar;