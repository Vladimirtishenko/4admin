import React from 'react'
import ReactDOM from 'react-dom';
import Layout from '../layout/layout.jsx';
import Table from '../widget/tables-grid.jsx';

class Main extends React.Component {
	
	render () {
		return (
			<div>
			   <Layout />
			   <Table />
			</div>
		);
	}
}

export default Main;