import React from 'react';
import {
  browserHistory,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from './components/main/main_list.jsx'
import User from './components/user/user_list.jsx'

class Routers extends React.Component {
	render () {
		return (
		  <Router history={browserHistory}>
		    <div>
		        <Route exact={true} path="/" component={Main} />
		        <Route path="/users" component={User} />
		    </div>
		  </Router>
		);
	}
}

export default Routers;