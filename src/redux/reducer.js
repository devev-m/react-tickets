const initialState = {
  currency: 'RUB',
  checkbox: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return { ...state, currency: action.payload };
    case 'SET_CHECKBOX':
      return { ...state, checkbox: action.payload };
    default:
      return { ...state };
  }
};
