export const CLIENTES_GET_ALL = "CLIENTES_GET_ALL";
export const CLIENTES_SET_DATA = "CLIENTES_SET_DATA";
export const CLIENTES_GET_REPORT = "CLIENTES_GET_REPORT";
export const CLIENTES_SET_REPORTS = "CLIENTES_SET_REPORTS";

/** Função que aciona o redux-saga para retorno de dados da API */
export const getClients = (payload) => ({
  type: "CLIENTES_GET_ALL",
  payload,
});

/** Função que aciona o redux-saga para retorno de dados da API */
export const getClientsReports = (payload) => ({
  type: "CLIENTES_GET_REPORT",
  payload,
});

export const setData = (payload) => ({
  type: "CLIENTES_SET_DATA",
  payload,
});

export const setReports = (payload) => ({
  type: "CLIENTES_SET_DATA",
  payload,
});

const initialState = {
  data: null,
  reports: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CLIENTES_SET_REPORTS:
      return { reports: action.payload };
    case CLIENTES_SET_DATA:
      return { data: action.payload };
    default:
      return state;
  }
};

export default reducer;
