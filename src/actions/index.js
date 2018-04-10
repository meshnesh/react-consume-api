export * from './user.actions';
function handleAuthErr(key, errCode) {  
	return {
		type: 'HANDLE_AUTH_ERR',
		key,
		errCode
	};
}
