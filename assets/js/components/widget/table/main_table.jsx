import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../../includes/header.jsx';
import Sidebar from '../../includes/sidebar.jsx';

class Table extends React.Component {

    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    <div className="container-fluid">
                        <div className="row">
                        Table
                        </div>
                    </div>
                </div>      {/*site-content*/}
            </div>
        );
    }

}


export default Table;