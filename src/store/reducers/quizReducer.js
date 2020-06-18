import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_START,
} from "../actions/actionTypes";

const initialState = { quizes: [], loading: false, error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return { ...state, loading: true };
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: action.payload,
      };
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
