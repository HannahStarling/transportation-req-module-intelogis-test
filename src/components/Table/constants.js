const transportationRequest = [
  {
    key: 1,
    loadingPoint: {
      address: {
        location: 'строение 1, ул. Складочная, 1, Москва, 127018',
        bound: [55.801098833352306, 37.59411137971549],
      },
    },
    dropPoint: {
      address: {
        location: 'Рябиновая ул., 65, Москва, 119530',
        bound: [55.68047513756801, 37.434437554064154],
      },
    },
  },
  {
    key: 2,
    loadingPoint: {
      address: {
        location: 'Орджоникидзе ул., 11 строение 47, Москва, 115419',
        bound: [55.70683545495573, 37.59289221492051],
      },
    },
    dropPoint: {
      address: {
        location: 'Ярославское ш., д.1А, Пушкино, Московская обл., 141201',
        bound: [55.98262374935916, 37.86322695700906],
      },
    },
  },
  {
    key: 3,
    loadingPoint: {
      address: {
        location: 'Кавказский б-р, 26, Москва, 115477',
        bound: [55.62937640411207, 37.65968597158268],
      },
    },
    dropPoint: {
      address: {
        location: 'Коровинское ш., 35 строение 1, Москва, 125412',
        bound: [55.882447243978945, 37.51178997550136],
      },
    },
  },
  {
    key: 4,
    loadingPoint: {
      address: {
        location:
          'Поселение Московское квартал № 70, Москва, Московская обл., 142784',
        bound: [55.62330473956989, 37.421056909459296],
      },
    },
    dropPoint: {
      address: {
        location: '5-я Магистральная ул., 4 строение 2, Москва, 123007',
        bound: [55.77024323860355, 37.526254439960326],
      },
    },
  },
  {
    key: 5,
    loadingPoint: {
      address: {
        location: 'ул. Чечёрский пр., 51, Москва, Московская обл., 117042',
        bound: [55.52451479118363, 37.517313709604416],
      },
    },
    dropPoint: {
      address: {
        location: 'Технопарк М4, 28, Горки Ленинские, Московская обл., 142712',
        bound: [55.52429733034241, 37.77365914781893],
      },
    },
  },
  {
    key: 6,
    loadingPoint: {
      address: {
        location: 'ул. Лётчика Бабушкина, 30 строение 1, Москва, 129344',
        bound: [55.87023982480631, 37.67627683679269],
      },
    },
    dropPoint: {
      address: {
        location: '10, Видное, Московская обл., 142703',
        bound: [55.551528867644755, 37.702592946996525],
      },
    },
  },
];

const addresses = [
  ...transportationRequest.map((data) => {
    return {
      id: `${data.loadingPoint.address.bound[0]}`.slice(3),
      address: `${data.loadingPoint.address.location}`,
    };
  }),
  ...transportationRequest.map((data) => {
    return {
      id: `${data.dropPoint.address.bound[0]}`.slice(3),
      address: `${data.dropPoint.address.location}`,
    };
  }),
];

export { transportationRequest, addresses };
