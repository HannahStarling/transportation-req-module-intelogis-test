import { AddressSelect } from './AddressSelect/index';

const addresses = {
  address_1: {
    key: 1,
    id: 'address_1',
    location: 'строение 1, ул. Складочная, 1, Москва, 127018',
    bound: [55.801098833352306, 37.59411137971549],
  },
  address_2: {
    key: 2,
    id: 'address_2',
    location: 'Технопарк М4, 28, Горки Ленинские, Московская обл., 142712',
    bound: [55.52429733034241, 37.77365914781893],
  },
  address_3: {
    key: 3,
    id: 'address_3',
    location: '10, Видное, Московская обл., 142703',
    bound: [55.551528867644755, 37.702592946996525],
  },
  address_4: {
    key: 4,
    id: 'address_4',
    location: 'Орджоникидзе ул., 11 строение 47, Москва, 115419',
    bound: [55.70683545495573, 37.59289221492051],
  },
  address_5: {
    key: 5,
    id: 'address_5',
    location: 'Ярославское ш., д.1А, Пушкино, Московская обл., 141201',
    bound: [55.98262374935916, 37.86322695700906],
  },
  address_6: {
    key: 6,
    id: 'address_6',
    location: 'Кавказский б-р, 26, Москва, 115477',
    bound: [55.62937640411207, 37.65968597158268],
  },
  address_7: {
    key: 7,
    id: 'address_7',
    location: 'Коровинское ш., 35 строение 1, Москва, 125412',
    bound: [55.882447243978945, 37.51178997550136],
  },
  address_8: {
    key: 8,
    id: 'address_8',
    location:
      'Поселение Московское квартал № 70, Москва, Московская обл., 142784',
    bound: [55.62330473956989, 37.421056909459296],
    //
  },
  address_9: {
    key: 9,
    id: 'address_9',
    location: '5-я Магистральная ул., 4 строение 2, Москва, 123007',
    bound: [55.77024323860355, 37.526254439960326],
  },
  address_10: {
    key: 10,
    id: 'address_10',
    location: 'ул. Чечёрский пр., 51, Москва, Московская обл., 117042',
    bound: [55.52451479118363, 37.517313709604416],
  },
  address_11: {
    key: 11,
    id: 'address_11',
    location: 'ул. Лётчика Бабушкина, 30 строение 1, Москва, 129344',
    bound: [55.87023982480631, 37.67627683679269],
  },
  address_12: {
    key: 12,
    id: 'address_12',
    location: '10, Видное, Московская обл., 142703',
    bound: [55.551528867644755, 37.702592946996525],
  },
};

const addressOptions = Object.keys(addresses).map((id) => ({
  ...addresses[id],
}));

const columns = [
  {
    title: '№',
    dataIndex: 'key',
  },
  {
    title: 'Точка погрузки',
    dataIndex: ['loadingPoint', 'location'],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          point={'loadingPoint'}
          application={record}
        />
      );
    },
  },
  {
    title: 'Точка разгрузки',
    dataIndex: ['dropPoint', 'location'],
    render: (address, record) => {
      return (
        <AddressSelect
          address={address}
          point={'dropPoint'}
          application={record}
        />
      );
    },
  },
];

const paginationPosition = { position: ['bottomCenter'] };
const scrollOption = { x: true };
const title = () => 'Заявки на перевозку';

export {
  columns,
  addresses,
  addressOptions,
  paginationPosition,
  scrollOption,
  title,
};
