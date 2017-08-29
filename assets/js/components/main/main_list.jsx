import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../includes/header.jsx';
import Sidebar from '../includes/sidebar.jsx';




class Main extends React.Component {

    render () {
        return (
            <div>
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