import React from 'react';
import 'antd/dist/antd.css';
import { Table, Form } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequestAction } from '../../store/actions/selectRequestAction';
import { changeRequestAction } from '../../store/actions/changeRequestAction';
import {
  columns,
  addresses,
  paginationPosition,
  scrollOption,
  title,
} from './constants';

export const TransportationTable = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const requests = useSelector(
    (state) => state.transportationRequests.transportationRequests
  );
  const selected = useSelector(
    (state) => state.transportationRequests.selected
  );

  const handleAdressPoints = (values) => {
    const applicationId = Object.keys(values)[0];
    const changingPoint = Object.values(values)[0];
    const point = Object.keys(changingPoint)[0];
    const address = Object.values(changingPoint)[0];
    dispatch(changeRequestAction({ values, applicationId }));
    if (selected && selected.key === applicationId) {
      dispatch(
        selectRequestAction({
          [point]: {
            ...addresses[address],
          },
        })
      );
    }
  };

  const handleSelectedRequest = (_, selectedRows) => {
    dispatch(selectRequestAction(selectedRows[0]));
  };

  const dataSource = Object.keys(requests).map((id) => {
    const loadingPointAddress = addresses[requests[id].loadingPoint];
    const dropPointAddress = addresses[requests[id].dropPoint];
    return {
      key: id,
      loadingPoint: {
        value: loadingPointAddress.id,
        location: loadingPointAddress.location,
        bound: loadingPointAddress.bound,
      },
      dropPoint: {
        value: dropPointAddress.id,
        location: dropPointAddress.location,
        bound: dropPointAddress.bound,
      },
    };
  });

  return (
    <Form form={form} onValuesChange={handleAdressPoints}>
      <Table
        scroll={scrollOption}
        pagination={paginationPosition}
        columns={columns}
        dataSource={dataSource}
        bordered
        title={title}
        rowSelection={{
          type: 'radio',
          onChange: handleSelectedRequest,
        }}
      />
    </Form>
  );
};
