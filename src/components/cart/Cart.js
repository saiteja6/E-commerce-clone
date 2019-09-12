import React, { Component } from 'react'
import {Icon, Drawer, Button} from 'antd';
import './Cart.css';
class Cart extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    
      onClose = () => {
        this.setState({
          visible: false,
        });
      };

    render() {
        return (
            <div>
                <Button type="link" onClick={this.showDrawer}>
                    <Icon type="shopping-cart" /> Cart
                </Button>
                <Drawer
                    title="Basic Drawer"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Drawer>
            </div>
        )
    }
}
export default Cart;