import { combineReducers } from "redux";
import CommentsReducer from "reducers/comments";

const reducers = combineReducers({
    comments: CommentsReducer
});

export default reducers;
