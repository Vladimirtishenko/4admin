import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './user_form.jsx';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';

class UserView extends React.Component {

    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    <UserForm />
                </div>
            </div>
        );
    }


}


export default UserView;