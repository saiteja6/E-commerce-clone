import React from "react"                                                                                                                                                               

import { Modal, Button, Anchor } from 'antd';
import { Input,Icon } from 'antd';
const { Link } = Anchor;
class Login extends React.Component {
  state = {
    modalVisible: false,
    
  };

  setModalVisible(modalVisible) {
    this.setState({ modalVisible });
  }

 
  render() {
    return (
      <div>
        <Button type="link" onClick={() => this.setModalVisible(true)}>
          Login & Signup
        </Button>
        <Modal
          title="Login"
          style={{ top: 20 }}
          visible={this.state.modalVisible}
          onOk={() => this.setModalVisible(false)}
          onCancel={() => this.setModalVisible(false)}
        >

          <div>
    <Input
      placeholder="Enter Email/Mobile number "
      prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
      // // suffix={
      // //   <Tooltip title="Extra information">
      // //     <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
      // //   </Tooltip>
      // }
    />
    <br />
    <br />
    <Input.Password placeholder="Enter password" /> 
    <br />
    <br />
    <Button type="primary">Login</Button>
    <br /><br />
    <Button type="primary" ghost>
      Request OTP
    </Button>

   

  <Anchor>
    <Link href="#components-anchor-demo-basic" title="New to Here? Create an account" style={{ color: 'yellow' }} />
    </Anchor>
    {/* <Input prefix="￥" suffix="RMB" /> */}
  </div>

        </Modal>
      </div>
    );
  }
}

export default Login;