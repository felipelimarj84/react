export const NIVELDIFICULDADE_GET_ALL = "NIVELDIFICULDADE_GET_ALL";
export const NIVELDIFICULDADE_SET_DATA = "NIVELDIFICULDADE_SET_DATA";
export const NIVELDIFICULDADE_GET_REPORT = "NIVELDIFICULDADE_GET_REPORT";
export const NIVELDIFICULDADE_SET_REPORTS = "NIVELDIFICULDADE_SET_REPORTS"

export const getLevelDificult = (payload) => ({
  type: "NIVELDIFICULDADE_GET_ALL",
  payload,
});

export const getLevelDificultsReports = (payload) => ({
  type: "NIVELDIFICULDADE_GET_REPORT",
  payload,
});

export const setData = (payload) => ({
  type: "NIVELDIFICULDADE_SET_DATA",
  payload,
});

export const setReports = (payload) => ({
  type: "NIVELDIFICULDADE_SET_DATA",
  payload,
});

const initialState = {
  data: null,
  reports: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NIVELDIFICULDADE_SET_REPORTS: 
       return { reports: action.payload }
    case NIVELDIFICULDADE_SET_DATA:
      return { data: action.payload };
    default:
      return state;
  }
};

export default reducer