import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class SideBar extends React.Component {




    render() {
        return (
            <div className="dax-sidebar">
                <div className="dax-sidebar__logo">
                    <Link to="/" className="dax-sidebar__link">
                        DAX 100
                    </Link>
                </div>
                <div className="dax-sidebar__wrapper">
                    <form className="dax-sidebar__desktop-search-form hidden-lg hidden-md" role="search">
                        <input type="text" className="dax-sidebar__search-input active"
                               placeholder="Search"/>
                        <button type="submit" className="dax-sidebar__search-btn">
                            <i className="material-icons">search</i>
                        </button>
                    </form>
                    <ul className="dax-sidebar__wrapper-list">
                        <li className="dax-sidebar__sidebar-wrapper-item">
                            <Link to="/" className="dax-sidebar__wrapper-link active">
                                <i className="dax-sidebar__wrapper-icon material-icons">dashboard</i>
                                <p className="dax-sidebar__wrapper-par">Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className="dax-sidebar__wrapper-link">
                                <i className="dax-sidebar__wrapper-icon material-icons">person</i>
                                <p className="dax-sidebar__wrapper-par">User Profile</p>
                            </Link>
                        </li>
                        {/*
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/users">Users</Link></li>
                        */}
                    </ul>
                </div>
            </div>

        );
    }

}

export default SideBar;