export const CURADORIA_GET_ALL = "CURADORIA_GET_ALL";
export const CURADORIA_SET_DATA = "CURADORIA_SET_DATA";
export const CURADORIA_GET_REPORT = "CURADORIA_GET_REPORT";
export const CURADORIA_SET_REPORTS = "CURADORIA_SET_REPORTS";

export const getCuradoria = (payload) => ({
  type: "CURADORIA_GET_ALL",
  payload,
});

export const getCuradoriaReports = (payload) => ({
  type: "CURADORIA_GET_REPORT",
  payload,
});

export const setData = (payload) => ({
  type: "CURADORIA_SET_DATA",
  payload,
});

export const setReports = (payload) => ({
  type: "CURADORIA_SET_DATA",
  payload,
});

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CURADORIA_SET_DATA:
      return { data: action.payload };
    default:
      return state;
  }
};

export default reducer;
