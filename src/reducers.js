import { combineReducers } from "redux";

const setUp = (
  state = {
    NumberOfQuestion: "10",
    catagory: "",
    difficulty: "",
    type: "multiple",
    warning: false,
  },
  action
) => {
  switch (action.type) {
    case "NUMBER_OF_QUESTION":
      return { ...state, NumberOfQuestion: action.value };
    case "WARNING":
      return { ...state, warning: !state.warning };
    case "CATAGORY":
      let value;
      if (action.value === "Science:Computers") {
        value = "18";
      } else if (action.value === "Politics") {
        value = "24";
      } else if (action.value === "History") {
        value = "23";
      } else {
        value = "";
      }
      return { ...state, catagory: value };
    case "DIFFICULTY":
      return { ...state, difficulty: action.value };
    default:
      return { ...state };
  }
};

const URL = (
  state = { recived: false, data: [], turn: 0, correct: 0, incorrect: 0 },
  action
) => {
  switch (action.type) {
    case "RECIVED_DATA":
      return {
        ...state,
        recived: true,
        data: action.value,
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        turn: parseInt(state.turn) + 1,
        correct: state.correct + 1,
      };
    case "INCORRECT_ANSWER":
      return {
        ...state,
        turn: parseInt(state.turn) + 1,
        incorrect: state.incorrect + 1,
      };
    case "RESET":
      return {
        recived: false,
        data: [],
        turn: 0,
        correct: 0,
        incorrect: 0,
      };
    default:
      return { ...state };
  }
};

export const QUIZ_APP = combineReducers({ setUp, URL });
