import React, { useState } from 'react';

const LoginForm = ({ onSubmit }) => {
	const [login, setUsername] = useState();
	const [password, setPassword] = useState();

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit({ login, password })
	}

	return (
		<form
			className="ui form"
			style={{width: 300 }}
			onSubmit={handleSubmit}
		>
			{/*<h4 className="ui dividing header">Login</h4>*/}
			<div className="field">
				<label>Username</label>
				<input
					type="text"
					name="username"
					placeholder="username"
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div className="field">
				<label>Password</label>
				<input
					type="password"
					name="password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button className="ui button primary fluid" type="submit">
				Login
			</button>
		</form>
	)
}

export default LoginForm;