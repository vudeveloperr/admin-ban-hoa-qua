import React from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';

const LoginWrapper = styled.div`
  background-image: url("login-register.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content:center;
  align-items: center;
`
const FormWrapper = styled.div`
  text-align: center;
  background-color: rgba(255,255,255,0.5);
  border-radius: 5px;
  padding: 30px 30px;
`


class Login extends React.Component {

  onFinish = (values) => {

  }

  render() {
    return (
      <LoginWrapper>
        <FormWrapper>
          <h1>Login</h1>
          <Form
            onFinish={this.onFinish}
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

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
          </Form>
        </FormWrapper>
      </LoginWrapper>
    );
  }
};

export default withRouter(Login);