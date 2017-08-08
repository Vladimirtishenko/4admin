import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';

class Layout extends React.Component {
	
	render () {
		return (
			<div>
			   <Header />
			   <Sidebar />
			</div>
		);
	}
	

}


export default Layout;