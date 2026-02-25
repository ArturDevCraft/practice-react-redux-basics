const initState = { message: 'Działa!', time: null, users: [] };

const reducer = (state = initState, action) => {
	switch (action.type) {
		case 'getCurrentTime':
			return { ...state, time: new Date() };
		case 'ADD_USER':
			const usersAmount = state.users.length;
			const id = usersAmount <= 0 ? 1 : state.users[usersAmount - 1].id + 1;
			const newUsers = [...state.users, { id: id, name: action.payload }];
			return { ...state, users: newUsers };
		case 'DELETE_USER':
			const usersAfterDeleted = state.users.filter(
				(user) => user.id !== action.payload,
			);
			return {
				...state,
				users: usersAfterDeleted,
			};
		case 'REMOVE_USERS':
			return { ...state, users: [] };

		default:
			return state;
	}
};

export default reducer;
