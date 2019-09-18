import React, { Component } from 'react'
import {Icon, Drawer, Button, message} from 'antd';

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
    
   

    onClick(){
      window.location.href="http://localhost:3000/";
    }

    render() {
        return (
            <div>
              {/* <h1>{this.state.message}</h1> */}
                <Button type="link" onClick={this.showDrawer}>
                    <Icon type="shopping-cart" />Cart
                </Button>
                <Drawer
                    title="My Cart"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    >
                      <p>Your cart is empty!</p>
                      
                                     
                                     
                      <Button className="Shop-now" onClick={this.onClick}>Shop now</Button>
          
                </Drawer>
            </div>
        )
    }
}
export default Cart;