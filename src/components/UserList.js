import React from 'react';
import UserItem from './UserItem';
import { addUser } from '../actions/user';
import { connect } from 'react-redux';
class UserList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		};
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onAddUser(this.state.userName);
		this.setState({
			userName: '',
		});
	};

	changeHandler = (e) => {
		this.setState({
			userName: e.target.value,
		});
	};
	render() {
		return (
			<>
				<form>
					<div>
						<input value={this.state.userName} onChange={this.changeHandler} />
						<input type="submit" value="dodaj" onClick={this.handleSubmit} />
					</div>
				</form>

				<ul>
					{this.props.users.map((user) => (
						<UserItem key={user.id} name={user.name} id={user.id} />
					))}
				</ul>
			</>
		);
	}
}
const mapStateToProps = (state, props) => {
	return { users: state.users };
};

const mapActionToProps = {
	onAddUser: addUser,
};

export default connect(mapStateToProps, mapActionToProps)(UserList);
