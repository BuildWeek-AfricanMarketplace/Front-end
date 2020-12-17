import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Register() {
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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

	const formSubmit = (e) => {
		e.preventDefault();
		// ? may need to work a hook in here
		setFormState({
			username: "",
			email: "",
			password: "",
		});

		// TODO axios Post

		axios.post("http://bwbe.herokuapp.com/api/auth/register", formState)
			.then((res) => {
				console.log("RESPONSE", res);
				setPost(res.data);
				console.log("POST", post);
				setServerError(null);
				setFormState({
					username: "",
					email: "",
					password: "",
				});
			})
			.catch((err) => {
				setServerError("OOPS! SOMETHING WENT WRONG!");
			});
	};

	// TODO Schema

	const formSchema = yup.object().shape({
		username: yup.string().required("Username is required!"),
		email: yup.string().email().required("Email is required!"),
		password: yup.string().required("Password is required"),
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
		<form onSubmit={formSubmit}>
			{serverError && <p className="error">{serverError}</p>}

			<label htmlFor="username">
				Username
				<input
					id="username"
					type="text"
					name="username"
					value={formState.username}
					onChange={handleChange}
				/>
				{errors.username.length > 0 ? (
					<p className="error">{errors.username}</p>
				) : null}
			</label>

			<label htmlFor="email">
				Email
				<input
					id="email"
					type="text"
					name="email"
					value={formState.email}
					onChange={handleChange}
				/>
				{errors.email.length > 0 ? (
					<p className="error">{errors.email}</p>
				) : null}
			</label>

			<label htmlFor="password">
				Password
				<input
					id="password"
					type="text"
					name="password"
					value={formState.password}
					onChange={handleChange}
				/>
				{errors.password.length > 0 ? (
					<p className="error">{errors.password}</p>
				) : null}
			</label>
		</form>
	);
}
