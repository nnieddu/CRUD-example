import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

export const getPosts = () => {
  return async (dispatch) => {
    try {
			const res = await axios
				.get(`http://localhost:3003/posts?_sort=id&_order=desc`);
			dispatch({ type: GET_POSTS, payload: res.data });
		} catch (err) {
			return console.log(err);
		}
  };
};

export const addPost = (data) => {
  return async (dispatch) => {
    try {
      await axios.post(`http://localhost:3003/posts`, data);
      dispatch({ type: ADD_POST, payload: data });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const editPost = (data) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "put",
        url: `http://localhost:3003/posts/${data.id}`,
        data: { ...data },
      });
      dispatch({ type: EDIT_POST, payload: { ...data } });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3003/posts/${postId}`,
      });
      dispatch({ type: DELETE_POST, payload: { postId } });
    } catch (err) {
      return console.log(err);
    }
  };
};

export const addLike = (data) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "put",
        url: `http://localhost:3003/posts/${data.id}`,
        data: { ...data },
      });
      dispatch({ type: ADD_LIKE, payload: { ...data } });
    } catch (err) {
      return console.log(err);
    }
  };
};
