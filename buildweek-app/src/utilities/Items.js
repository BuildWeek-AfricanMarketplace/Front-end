import { Auth } from "./AxiosAuth";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const FetchItems = () => (dispatch) => {
	dispatch({ type: FETCH_DATA });
	Auth()
		.get("api/items")
		.then((res) => {
			console.log("FETCH SUCCESS", res.data);
			dispatch({ type: FETCH_SUCCESS, payload: res.data });
		})
		.catch((err) => {
			console.log("ERROR!", err);
			dispatch({ type: FETCH_ERROR, payload: err });
		});
};

export const ADD_DATA = "ADD_DATA";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_ERROR = "ADD_ERROR";

export const AddItems = (items) => (dispatch) => {
	dispatch({ type: ADD_DTATA });
	Auth()
		.post("api/items", items)
		.then((res) => {
			console.log("ADD SUCCESS", items);
			dispatch({ type: ADD_SUCCESS });
		})
		.catch((err) => {
			console.log("ERROR!", err);
			dispatch({ type: ADD_ERROR, payload: err });
		});
};
