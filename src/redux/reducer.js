const initialState = {
  data: 'RUB',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, data: action.payload };
    default:
      return { ...state, data: initialState };
  }
};
