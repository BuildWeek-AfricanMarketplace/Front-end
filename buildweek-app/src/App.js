import React from "react";
import Register from "./components/Reg";
import "./App.css";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import LogIn from "./components/Login";
import Welcome from "./components/Welcome";
// import Home from "./components/Home";

// TODO add routes to homepage & registration/login forms
// TODO styling for components
// ? Figure out why marketing page is breaking - link issue?
// ? Need error for incorrect password, need stop to onClick function
// ? Create forms for adding items to database
// ? Figure out userProfile and serviceWorker components (needed?)

function App() {
	return (
		<div className="App">
			<NavLinks>
				<Title>African Marketplace</Title>
				<LinkTo className="nav-links">
					<Link to="">Home</Link>
					<Link to="/login">Log In</Link>
					<Link to="/register">Register</Link>
				</LinkTo>
			</NavLinks>
			<Route path="/login" component={LogIn} />
			<Route path="/register" component={Register} />
			<Route path="/welcome" component={Welcome} />
			<Register />
		</div>
	);
}

const NavLinks = styled.nav`
	background-color: ${(props) => props.theme.primaryColor};
	border-bottom: 3px solid ${(props) => props.theme.tertiaryColor};
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	color: ${(props) => props.theme.tertiaryColor};
`;

const Title = styled.h1`
	padding-top: 2%;
	margin: 0 0 0.25% 3%; ;
`;

const LinkTo = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 20%;
	padding-bottom: 0.25%;
	margin-right: 3%;
	font-weight: bold;
`;
export default App;
