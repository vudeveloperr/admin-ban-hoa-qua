import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import {withRouter } from 'react-router-dom'

// import qs from 'qs';

const layout = {
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 16,
  },
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  login(values){
  }

  onFinish = (values) => {
    this.login(values);
  }

  render() {
    return (
        <div className="login-screen" style={{backgroundImage: 'url(/login-register.jpg)'}}>
            <div className="login-container" style={{ textAlign: "center" }}>
                <h1>Login</h1>
                <Form
                {...layout}
                name="basic"
                onFinish={this.onFinish}
                style={{ margin: "auto" }}
                >
                <Form.Item
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input placeholder="Username" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password placeholder="Password" />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                </Form.Item>
                </Form>
            </div>
        </div>
    );
  }
};

export default withRouter(Login);