import React from 'react';
import { Layout, Menu, Icon, Dropdown } from 'antd';
import Login from '../login/login';
import Homecontent from '../home/Home';
import Carouselism from '../carousel/Carousel';
import Cart from '../cart/Cart';
import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';
import Mobiles from '../mobiles/Mobiles';
import Laptops from '../laptops/Laptops';
import Notfound from '../notfound/Notfound';
import Fiction from '../fiction/Fiction';
import EntranceExams from '../entrance-exams/Entrance-exams';


const { SubMenu } = Menu;
const { Header, Content } = Layout;
const menu = (
    <Menu>
    <SubMenu title="Electronics">
      <Menu.Item><Link to="/laptops">Laptops</Link></Menu.Item>
      <Menu.Item>
           <Link to="/mobiles">Mobiles</Link></Menu.Item>
    </SubMenu>
    <SubMenu title="Books"> 
      <Menu.Item> <Link to="/fiction">Fiction</Link></Menu.Item>
      <Menu.Item>
           <Link to="/entrance-exams">EntranceExams</Link></Menu.Item>
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
            
          
        </Content>
    </Layout>
  </Layout>
  </div>
);
        }
      }
export default Navbar;