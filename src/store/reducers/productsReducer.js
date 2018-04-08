const initialState = {
  products: [
    {
      product: 'Candy 700g',
      quantity: 3,
      unitCost: 50
    },
    {
      product: 'Apple 1kg',
      quantity: 1,
      unitCost: 30
    }
  ]
};

const productsReducer = function(state = initialState, action) {
  return {
    ...state
  };
};

export default productsReducer;
