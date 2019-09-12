import React from "react";
import { Menu, Dropdown, Icon } from 'antd';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    {/* <Menu.Item>1st menu item</Menu.Item> */}
    <SubMenu title="Electronics">
      <Menu.Item>Laptops</Menu.Item>
      <Menu.Item>Mobiles</Menu.Item>
    </SubMenu>
    {/* <Menu.Item>2nd menu item</Menu.Item> */}
    <SubMenu title="Books">
      <Menu.Item>Fiction</Menu.Item>
      <Menu.Item>Entrance Exams</Menu.Item>
    </SubMenu>
    {/* <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5th menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu> */}
  </Menu>
);

class ShopBy extends React.Component {
render() {
return (
  <Dropdown overlay={menu}>
    {/* <a className="ant-dropdown-link" > */}
      Shop by Category <Icon type="down" />
    {/* </a> */}
  </Dropdown>
  
);
  }
}

export default ShopBy;


// href="#"