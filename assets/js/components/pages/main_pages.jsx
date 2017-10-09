import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';




class Pages extends React.Component {

    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    <div className="container-fluid site-card-head">
                        <div className="site-card-head__wrapper">
                            <div className="site-card-head__title">
                                <h4 className="site-card-head__title-head">Update Page</h4>
                                <p className="site-card-head__title-description">Edit it!</p>
                            </div>
                            <div className="site-table-responsive-wrapper">
                                <table className="site-card-head__wrapper-table">
                                    <thead>
                                    <tr>
                                        <td className="site-card-head__wrapper-table-head-data">
                                            Lable
                                        </td>
                                        <td className="site-card-head__wrapper-table-head-data turn-center">
                                            Edit
                                        </td>
                                        <td className="site-card-head__wrapper-table-head-data turn-center">
                                            Delete
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="site-card-head__wrapper-table-data">
                                            Main page
                                        </td>
                                        <td className="site-card-head__wrapper-table-edit-data">
                                            <Link to="/update_page" className="site-card-head__wrapper-table-edit-data-link">
                                                <i className="material-icons">edit</i>
                                            </Link>
                                        </td>
                                        <td className="site-card-head__wrapper-table-edit-data">
                                            <Link to="#"  onClick={this.showModal}
                                                  className="site-card-head__wrapper-table-delete-data-link">

                                                <i className="material-icons">delete_forever</i>
                                            </Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>      {/*site-content*/}
            </div>
        );
    }


}

export default Pages;