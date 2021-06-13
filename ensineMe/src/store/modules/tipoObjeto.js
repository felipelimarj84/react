export const TIPOOBJETO_GET_ALL = "TIPOOBJETO_GET_ALL";
export const TIPOOBJETO_SET_DATA = "TIPOOBJETO_SET_DATA";
export const TIPOOBJETO_GET_REPORT = "TIPOOBJETO_GET_REPORT";
export const TIPOOBJETO_SET_REPORTS = "TIPOOBJETO_SET_REPORTS"

export const getObjectTypes = (payload) => ({
  type: "TIPOOBJETO_GET_ALL",
  payload,
});

export const getObjectTypesReports = (payload) => ({
  type: "TIPOOBJETO_GET_REPORT",
  payload,
});

export const setData = (payload) => ({
  type: "TIPOOBJETO_SET_DATA",
  payload,
});

export const setReports = (payload) => ({
  type: "TIPOOBJETO_SET_REPORTS",
  payload,
});

const initialState = {
  data: null,
  reports: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TIPOOBJETO_SET_REPORTS: 
       return { reports: action.payload }
    case TIPOOBJETO_SET_DATA:
      return { data: action.payload };
    default:
      return state;
  }
};

export default reducer