import {
	FETCH_DATA,
	FETCH_SUCCUESS,
	FETCH_ERROR,
	ADD_DATA,
	ADD_SUCCESS,
	ADD_ERROR,
} from "./Items";

const initialState = {
	items: [],
	isFetching: false,
	errors: "",
};

const ItemReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_DATA:
			return { ...state, isFetching: true };

		case FETCH_SUCCESS:
			return { ...state, isFetching: false, error: action.payload };

		case FETCH_ERROR:
			return { ...state, isFetching: false, error: action.payload };

		case ADD_DATA:
			return { ...state, isFetching: true, items: [...state.items] };

		case ADD_SUCCESS:
			return {
				...state,
				isFetching: false,
				items: [...state.items],
				error: "",
			};

		case ADD_ERROR:
			return { ...state, isFetching: false, error: action.payload };

		default:
			return state;
	}
};

export default ItemReducer;
