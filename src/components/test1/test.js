import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import s from './test.module.css'


import {
  Form,
  Input,
  Select,
  AutoComplete,
} from 'antd';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};


const RegistrationForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="+7">+7</Option>
        <Option value="+3">+3</Option>
        <Option value="+1">+1</Option>
      </Select>
    </Form.Item>
  );



  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };



  const getFormValues = () => 
  Array
    .from(document.querySelectorAll("input"))
    .reduce((acc, cur) => {
      acc.type.push(cur.type)
      acc.value.push(cur.value)
      return acc
    }, { type: [], value: [] })


 const convertObjectToArray = (obj) => Object.entries(obj)
  .reduce((acc, [key, values]) => values.map((v, i) => acc[i] ? { ...acc[i], [key]: v } : { [key]: v }), [])


 window.onload = () => {

  const formValues = getFormValues()

  // const formValuesArray = convertObjectToArray(formValues)
  console.log(formValues)
  // console.log(formValuesArray)
 }

 window.getArr = () => {

  const formValues = getFormValues()

  const formValuesArray = convertObjectToArray(formValues)

  console.log(formValuesArray)
 }





  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return <div>
  <div className={s.main}>
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />   
      </Form.Item>


      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        
        name="Link"
        label="Link"
        rules={[
          {
            required: true,
            message: 'Please input website!',
          },
        ]}>
        <AutoComplete options={websiteOptions} onChange={onWebsiteChange} placeholder="Link">
          <Input />
        </AutoComplete>
      </Form.Item>
    </Form>
    </div>

    <div className={s.btn}>
    <button className={s.btn1} onClick={window.onload}>getFormValues</button>
    <button className={s.btn2} onClick={window.getArr}>convertObjectToArray</button>
    </div>
    </div>
};

export default RegistrationForm;