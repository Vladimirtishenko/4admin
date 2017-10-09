import React from 'react';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';
import UpdatePageForm from './create_update_page_form.jsx';
import Table from '../widget/table/main_table.jsx';

class UpdatePage extends React.Component {



    render () {
        console.log(1)
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    <div className="container-fluid site-card-head">
                        <div className="site-card-head__wrapper">
                            <div className="site-card-head__title">
                                <h4 className="site-card-head__title-head">Page name</h4>
                                <div className="site-card-head__tabs">
                                    <button className="site-card-head__tabs-btn site-card-head__tabs-btn_active"
                                            onClick={this.openLanguage/*(event, 'Russian')*/}>
                                        Russian
                                    </button>
                                    <button className="site-card-head__tabs-btn" onClick={this.openLanguage/*(event, 'English')*/}>
                                        English
                                    </button>
                                </div>
                            </div>
                            <UpdatePageForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default UpdatePage;