import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function LogIn() {
	const [formState, setFormState] = useState({
		username: "",
		password: "",
	});

	const history = useHistory();
	const routeToWelcome = (e) => {
		setTimeout(() => {
			history.push("/welcome");
		}, 1000);
	};

	// TODO server error state

	const [serverError, setServerError] = useState("");

	// TODO button disable/enable

	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

	// TODO response from API

	const [post, setPost] = useState([]);

	// TODO error state

	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	// TODO validation

	const validateChange = (e) => {
		yup.reach(formSchema, e.target.name)
			.validate(
				e.target.type === "checkbox"
					? e.target.checked
					: e.target.value
			)
			.then((valid) => {
				setErrors({ ...errors, [e.target.name]: "" });
			})
			.catch((err) => {
				console.log("ERROR", err);
				setErrors({ ...errors, [e.target.name]: err.errors[0] });
			});
	};

	// TODO handleChange

	const handleChange = (e) => {
		e.persist();

		const newFormState = {
			...formState,
			[e.target.name]:
				e.target.type === "checkbox"
					? e.target.checked
					: e.target.value,
		};

		validateChange(e);
		setFormState(newFormState);
	};

	const formSubmit = async (e) => {
		e.preventDefault();
		// ? may need to work a hook in here

		axios.post(
			"https://africanmarketplace199.herokuapp.com/api/auth/login",
			formState
		)
			.then((res) => {
				console.log("RESPONSE", res.data);
				window.sessionStorage.setItem("token", res.data.token);
				window.sessionStorage.setItem("user", res.data.id);
				history.push(`/user/${res.data.id}`);
				setServerError(null);
			})
			.catch((err) => {
				setServerError("OOPS! SOMETHING WENT WRONG!");
			});
	};

	// TODO Schema

	const formSchema = yup.object().shape({
		username: yup.string().required("Username is required!"),
		password: yup.string().required("Password is required"),
	});

	// TODO useEffect

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			console.log("IS FORM VALID?", valid);
			setButtonIsDisabled(!valid);
		});
	}, [formState]);

	return (
		<FormContainer onSubmit={formSubmit}>
			<FormInput className="form-container">
				{serverError && <p className="error">{serverError}</p>}
				<h2>Log In</h2>
				<label htmlFor="username">
					<input
						id="username"
						type="text"
						name="username"
						placeholder="Username"
						value={formState.username}
						onChange={handleChange}
					/>
					{errors.username.length > 0 ? (
						<p className="error">{errors.username}</p>
					) : null}
				</label>

				<label htmlFor="password">
					<input
						id="password"
						type="password"
						name="password"
						placeholder="Password"
						value={formState.password}
						onChange={handleChange}
					/>
					{errors.password.length > 0 ? (
						<p className="error">{errors.password}</p>
					) : null}
				</label>
				<button
					type="submit"
					className="submit"
					disabled={buttonIsDisabled}
					// onClick={routeToWelcome}
				>
					Submit
				</button>
			</FormInput>
		</FormContainer>
	);
}

const FormContainer = styled.form`
	background-color: ${(props) => props.theme.primaryColor};
`;

const FormInput = styled.div`
	background-color: ${(props) => props.theme.secondaryColor};
`;
