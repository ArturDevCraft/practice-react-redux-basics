import React from 'react';

import Task01 from './../../01/Task01';
import Task02 from './../../02/Task02';
import Task03 from './../../03/Task03';
import Task04 from './../../04/Task04';
import Task05 from './../../05/Task05';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const App = () => {
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

			default:
				return state;
		}
	};

	const store = createStore(
		reducer,
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	);

	return (
		<>
			<Task01 />
			<Provider store={store}>
				<Task02 />
				<Task03 />
				<Task04 />
			</Provider>
			{/* <Task05 /> */}
		</>
	);
};

export default App;
