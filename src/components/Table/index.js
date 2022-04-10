import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { AddressSelect } from './AddressSelect/index';
import { selectRequestAction } from '../../store/redusers/transportationRequestsReduser';

export const TransportationTable = ({ onApplicationChanges }) => {
  const dispatch = useDispatch();
  const transportationRequests = useSelector(
    (state) => state.transportationRequests.transportationRequests
  );
  const [form] = Form.useForm();

  const columns = [
    {
      title: '№',
      dataIndex: 'key',
    },
    {
      title: 'Точка погрузки',
      dataIndex: ['loadingPoint', 'address', 'location'],
      render: (address) => {
        return <AddressSelect address={address} />;
      },
    },
    {
      title: 'Точка разгрузки',
      dataIndex: ['dropPoint', 'address', 'location'],
      render: (address) => {
        return <AddressSelect address={address} />;
      },
    },
  ];

  const handleSelectedRequest = (_, selectedRows) => {
    dispatch(selectRequestAction(selectedRows[0]));
  };

  return (
    <Form form={form} onValuesChange={onApplicationChanges}>
      <Table
        style={
          { width: '50vw' } //вынести в styles
        }
        scroll={{ x: true }}
        columns={columns}
        dataSource={transportationRequests}
        bordered
        title={() => 'Заявки на перевозку'}
        rowSelection={{
          type: 'radio',
          onChange: handleSelectedRequest,
        }}
      />
    </Form>
  );
};
