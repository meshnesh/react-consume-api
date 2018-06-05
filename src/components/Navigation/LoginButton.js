import React from 'react';
import { Link } from 'react-router-dom';
import ModalBUtton from '../Modal';



export function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
        Login
		</button>
	);
}

export function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
        Logout
		</button>
	);
}
