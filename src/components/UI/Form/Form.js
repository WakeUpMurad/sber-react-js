import React, { useState } from 'react'
import { Button, Checkbox, Form as AntForm, Input } from 'antd'

const Form = ({ title, handleSubmit }) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [remember, setRemember] = useState(true)

  const onFinish = (values) => {
    handleSubmit(email, pass, remember)
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <AntForm
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <AntForm.Item
        label="Useremail"
        name="useremail"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="useremail"
        />
      </AntForm.Item>

      <AntForm.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          autoComplete="password"
        />
      </AntForm.Item>

      <AntForm.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
        checked={remember}
        onChange={(e) => setRemember(e.target.checked)}
      >
        <Checkbox>Remember me</Checkbox>
      </AntForm.Item>

      <AntForm.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
          type="primary"
          htmlType="submit"
        >
          {title}
        </Button>
      </AntForm.Item>
    </AntForm>
  )
}
export default Form
