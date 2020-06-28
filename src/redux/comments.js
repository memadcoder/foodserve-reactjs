import * as ActionTypes from "./ActionTypes";

export const Comments = (state = { errMess: null, comments: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comment = action.payload;
      comment.id = state.length;
      comment.date = new Date().toISOString();
      console.log("Comment: ", comment);
      return state.concat(comment);
    case ActionTypes.ADD_COMMENTS:
      var comment = action.payload;
      comment.id = state.comments.length;
      comment.date = new Date().toISOString();
      return { ...state, comments: state.comments.concat(comment) };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload };
    default:
      return state;
  }
};
