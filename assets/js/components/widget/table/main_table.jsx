import React from 'react'
import ReactDOM from 'react-dom';
import Header from '../../includes/header.jsx';
import Sidebar from '../../includes/sidebar.jsx';
import Cell from './cell.jsx';

class Table extends React.Component {

    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    <div className="container-fluid site-users-table">
                        <div className="site-users-table__wrapper">
                            <div className="site-users-table__title">
                                <h4 className="site-users-table__title-head">All users</h4>
                                <p className="site-users-table__title-description">Manage them</p>
                            </div>
                            <table className="site-users-table__wrapper-table">
                                <thead>
                                <tr>
                                    <td className="site-users-table__wrapper-table-head-data">
                                        Name
                                    </td>
                                    <td className="site-users-table__wrapper-table-head-data">
                                        E-mail
                                    </td>
                                    <td className="site-users-table__wrapper-table-head-data">
                                        Position
                                    </td>
                                    <td className="site-users-table__wrapper-table-head-data">
                                        Role
                                    </td>
                                </tr>
                                </thead>
                                <Cell/>
                            </table>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>      {/*site-content*/}
            </div>
        );
    }

}


export default Table;