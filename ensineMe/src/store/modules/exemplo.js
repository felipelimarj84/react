export const EXEMPLO_UPDATE = "EXEMPLO_UPDATE";

export const exempleUpdate = (payload) => ({
  type: "EXEMPLO_UPDATE",
  payload,
});

const initialState = {
  data: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXEMPLO_UPDATE":
      return { data: action.payload };
    default:
      return state;
  }
};

export default reducer;
