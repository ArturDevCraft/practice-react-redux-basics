import React from 'react';
import { deleteUser } from '../actions/user';
import { useDispatch } from 'react-redux';

const UserItem = ({ name = 'Default Name', id = -1 }) => {
	const dispatch = useDispatch();
	const deleteHandler = (id) => {
		dispatch(deleteUser(id));
	};
	return (
		<li>
			{name} <button onClick={() => deleteHandler(id)}>usuń</button>
		</li>
	);
};

export default UserItem;
