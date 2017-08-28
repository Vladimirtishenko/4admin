import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';
import Table from '../widget/tables-grid.jsx';




class Main extends React.Component {

    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                </div>

            </div>
        );
    }


}

export default Main;