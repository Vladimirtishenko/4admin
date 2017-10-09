import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';
import PageForm from '../pages/create_update_page_form.jsx';
import Modal from '../widget/modal/modal.jsx';
import {Link} from 'react-router-dom';




class Main extends React.Component {

    showModal(){
        console.log(1);
    }

    render () {
        return (
            <div>
                {/*<Modal/>*/}
                <Sidebar />
                <div className="site-content">
                    <Header />
                    Main
                </div>      {/*site-content*/}
            </div>
        );
    }


}

export default Main;