import axios from "../../axios/axios-quiz";
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
} from "./actionTypes";

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get("/quizes.json");
      const quizes = [];
      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Question ${index + 1}`,
        });
      });
      dispatch(fetchQuizesSuccess(quizes));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizesStart() {
  return { type: FETCH_QUIZES_START };
}

export function fetchQuizesSuccess(quizes) {
  return { type: FETCH_QUIZES_SUCCESS, payload: quizes };
}

export function fetchQuizesError(e) {
  return { type: FETCH_QUIZES_ERROR, payload: e };
}
