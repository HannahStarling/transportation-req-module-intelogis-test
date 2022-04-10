import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { addresses } from '../constants';
// import { useDispatch, useSelector } from 'react-redux';

const { Option } = Select;

export const AddressSelect = ({ address }) => {
  // const addresses = useSelector(
  //   (state) => state.transportationRequests.transportationRequests
  // );

  const handleCaseSensitivity = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <Select
      bordered={false}
      className={'.address__select'}
      defaultValue={address}
      showSearch
      filterOption={handleCaseSensitivity}
    >
      {addresses.map(({ address, id }) => (
        <Option key={id} value={address}>
          {address}
        </Option>
      ))}
    </Select>
  );
};
