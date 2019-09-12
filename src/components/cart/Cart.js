import React, { Component } from 'react'
import {Icon} from 'antd';
import './Cart.css';
export default class Cart extends Component {
    render() {
        return (
            <div>
                Your cart is empty!
                <br></br>
                <a href="#" class="button">Shop now</a>
            </div>
        )
    }
}
