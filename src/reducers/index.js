import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import postReducer from "./post.reducer";
import mailReducer from "./user.reducer";

export default combineReducers({
	mailReducer,
  postReducer,
  userReducer,
});
