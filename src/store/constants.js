export const INITIAL_STATE = {
  transportationRequests: {
    1: {
      loadingPoint: 'address_1',
      dropPoint: 'address_2',
    },
    2: {
      loadingPoint: 'address_3',
      dropPoint: 'address_4',
    },
    3: {
      loadingPoint: 'address_5',
      dropPoint: 'address_6',
    },
    4: {
      loadingPoint: 'address_7',
      dropPoint: 'address_8',
    },
    5: {
      loadingPoint: 'address_9',
      dropPoint: 'address_10',
    },
    6: {
      loadingPoint: 'address_11',
      dropPoint: 'address_12',
    },
  },
  selected: null,
};
export const SELECT_REQUEST = 'SELECT_REQUEST';
export const CHANGE_POINT = 'CHANGE_POINT';
