import axios from "axios";

const Auth = () => {
	const token = window.sessionStorage.getItem("token");

	return axios.create({
		headers: {
			authorization: "Bearer " + token,
		},
		baseURL: "https://bwbe.herokuapp.com/",
	});
};

export default Auth;
