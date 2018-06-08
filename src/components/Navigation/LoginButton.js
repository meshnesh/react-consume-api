import React from 'react';
import { Link } from 'react-router-dom';
import ModalBUtton from '../Modal';



export function LoginButton() {
	return (
		<Link to="/register">
			Register
		</Link>
	);
}

export function LogoutButton(props) {
	return (
		<a onClick={props.onClick}>
			Log out
		</a>
	);
}
