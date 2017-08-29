import React from 'react';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';
import Table from '../widget/table/main_table.jsx';

class Pages extends React.Component {



    render () {
        return (
            <div>
                <Sidebar />
                <div className="site-content">
                    <Header />
                    Pages
                </div>
            </div>
        );
    }


}

export default Pages;