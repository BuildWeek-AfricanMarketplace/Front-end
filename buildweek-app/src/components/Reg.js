import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

export default function Register() {
	const [formState, setFormState] = useState({
		usename: "",
		email: "",
		password: "",
	});

	// TODO server error state

	const [serverError, setServerError] = useState("");

	// TODO button disable/enable

	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

	// TODO response from API

	const [post, setPost] = useState([]);

	// TODO error state

	const [errors, setErrors] = useState({
		username: "",
		email: "",
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

	// TODO formSubmit

	const history = useHistory();

	const formSubmit = (e) => {
		e.preventDefault();
		// ? may need to work a hook in here
		setFormState({
			username: "",
			email: "",
			password: "",
		});

		// TODO axios Post

		axios.post("https://bwbe.herokuapp.com/api/auth/register", formState)
			.then((res) => {
				console.log("RESPONSE", res.data);
				setPost(res.data);
				console.log("POST", post);
				setServerError(null);
				setFormState({
					username: "",
					email: "",
					password: "",
				});
				// history.push("/login");
			})
			.catch((err) => {
				setServerError("OOPS! SOMETHING WENT WRONG!");
			});
	};

	// TODO Schema

	const formSchema = yup.object().shape({
		username: yup.string().required("Username is required!"),
		email: yup.string().email().required("Email is required!"),
		password: yup
			.string()
			.required("Password is required!")
			.min(5, "Password must be at least 5 chars!"),
	});

	// TODO useEffect

	useEffect(() => {
		formSchema.isValid(formState).then((valid) => {
			console.log("IS FORM VALID?", valid);
			setButtonIsDisabled(!valid);
		});
	}, [formState]);

	// TODO JSX

	return (
		<FormContainer onSubmit={formSubmit}>
			<FormInput className="form-container">
				{serverError && <p className="error">{serverError}</p>}
				<h2>Register</h2>
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

				<label htmlFor="email">
					<input
						id="email"
						type="text"
						name="email"
						placeholder="Email"
						value={formState.email}
						onChange={handleChange}
					/>
					{errors.email.length > 0 ? (
						<p className="error">{errors.email}</p>
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
