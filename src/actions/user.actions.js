import axios from "axios";

export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  return async (dispatch) => {
    try {
			const res = await axios
				.get(`http://localhost:3003/users`);
			dispatch({ type: GET_USER, payload: res.data });
		} catch (err) {
			return console.log(err);
		}
  };
};

export const addUserLike = (data) => {
  return async (dispatch) => {
    try {
			await axios({
				method: "put",
				url: `http://localhost:3003/users/${data.id}`,
				data: { ...data },
			});
			dispatch({ type: ADD_USER_LIKE, payload: { ...data } });
		} catch (err) {
			return console.log(err);
		}
  };
};
