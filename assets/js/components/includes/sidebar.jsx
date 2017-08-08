import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {

	render() {
		return (

		   <aside>
		   		  <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/users">Users</Link></li>
			      </ul>
		   </aside>

		);
	}
	
}

export default SideBar;