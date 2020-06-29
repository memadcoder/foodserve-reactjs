import * as ActionTypes from "./ActionTypes";

export const Feedbacks = (state = { errMess: null, feedbacks: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_FEEDBACKS:
      return { ...state, errMess: null, feedbacks: action.payload };
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      return { ...state, comments: state.comments.concat(comment) };
    case ActionTypes.FEEDBACKS_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
