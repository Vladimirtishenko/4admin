import React from 'react'
import ReactDOM from 'react-dom';
import Layout from '../layout/layout.jsx';
import UserForm from './user_form.jsx';

class UserView extends React.Component {
	
	render () {
		return (
			<div>
			   <Layout />
			   <UserForm />
			</div>
		);
	}
	

}


export default UserView;