import React from 'react';
import 'antd/dist/antd.css';
import { Form, Select } from 'antd';
import { addressOptions } from '../constants';

const { Option } = Select;

export const AddressSelect = ({ address, point, application }) => {
  const handleCaseSensitivity = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <Form.Item
      className="address__form-item"
      name={[String(application.key), point]}
      initialValue={address}
    >
      <Select bordered={false} showSearch filterOption={handleCaseSensitivity}>
        {addressOptions.map(({ id, location }) => (
          <Option key={id} value={id}>
            {location}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};
