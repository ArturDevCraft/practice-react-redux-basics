export const addUser = (name) => {
	return { type: 'ADD_USER', payload: name };
};

export const deleteUser = (id) => {
	return { type: 'DELETE_USER', payload: id };
};
