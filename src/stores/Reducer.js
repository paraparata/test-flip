const ACTIONS = {
  STORE_DATA: "store-data",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.STORE_DATA:
      return { ...action.payload };

    default:
      return state;
  }
};

export { ACTIONS };
export default Reducer;
