export const USER_SIGN_IN = "USER_SIGN_IN";
export const USER_SET = "USER_SET";
export const USER_LOGOUT = "USER_LOGOUT";

/** Função que aciona o redux-saga para retorno de dados da API */
export const signIn = (payload) => ({
  type: "USER_SIGN_IN",
  payload,
});

export const logout = () => ({
  type: "USER_LOGOUT",
});

export const setUser = (payload) => ({
  type: "USER_SET",
  payload,
});

const initialState = {
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return { token: action.payload };
    case USER_LOGOUT:
      return { token: null };
    default:
      return state;
  }
};

export default reducer;
