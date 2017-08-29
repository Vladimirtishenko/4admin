import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Search from '../widget/search/main__search.jsx';

class SideBar extends React.Component {




    render() {
        return (
            <div className="site-sidebar">
                <div className="site-sidebar__logo">
                    <Link to="/" className="site-sidebar__link">
                        DAX100
                    </Link>
                </div>
                <div className="site-sidebar__wrapper">
                    <div className="site-sidebar__wrapper-search-container hidden-lg hidden-md">
                        <Search/>
                    </div>
                    <ul className="site-sidebar__wrapper-list">
                        <li className="site-sidebar__sidebar-wrapper-item">
                            <Link to="/" className="site-sidebar__wrapper-link active">
                                <i className="site-sidebar__wrapper-icon material-icons">dashboard</i>
                                <p className="site-sidebar__wrapper-par">Dashboard</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users" className="site-sidebar__wrapper-link">
                                <i className="site-sidebar__wrapper-icon material-icons">person</i>
                                <p className="site-sidebar__wrapper-par">User Profile</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pages" className="site-sidebar__wrapper-link">
                                <i className="site-sidebar__wrapper-icon material-icons">content_copy</i>
                                <p className="site-sidebar__wrapper-par">Pages</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/table" className="site-sidebar__wrapper-link">
                                <i className="site-sidebar__wrapper-icon material-icons">people</i>
                                <p className="site-sidebar__wrapper-par">Table</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }

}

export default SideBar;