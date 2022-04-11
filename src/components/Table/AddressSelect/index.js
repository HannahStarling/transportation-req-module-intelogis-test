import React from 'react';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';
import { addresses } from '../constants';
//import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

export const AddressSelect = ({ address }) => {
  const handleCaseSensitivity = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <Form.Item
      style={{
        margin: 0,
      }}
      //уникальные имена полей "имеющие смысл"
      name={address}
      initialValue={address}
    >
      <Select bordered={false} showSearch filterOption={handleCaseSensitivity}>
        {addresses.map(({ address, id }) => (
          <Option key={id} value={address}>
            {address}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};
