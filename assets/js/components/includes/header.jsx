import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Search from '../widget/search/main__search.jsx';

class Header extends React.Component {

    sandwichMenu(event){
        var siteContent = document.querySelector(".site-content");
        (siteContent.classList.contains("site-sidebar-open")) ? siteContent.classList.remove("site-sidebar-open") :
            siteContent.className += " site-sidebar-open";
    }

    render () {

        return (
            <div className="head-wrapper">
                <div className="container-fluid">
                    <div className="site-header">
                        <button onClick={this.sandwichMenu} type="button"
                                className="site-head__mobile-toggle hidden-md hidden-lg">
                            <span className="site-head__mobile-toggle-icon-bar"></span>
                            <span className="site-head__mobile-toggle-icon-bar"></span>
                            <span className="site-head__mobile-toggle-icon-bar"></span>

                        </button>
                        <a className="site-head__logo" href="#">Material Dashboard</a>
                    </div>
                    <div className="site-header__desktop">
                        <div className="site-header__desktop-search-container hidden-sm hidden-xs">
                            <Search/>
                        </div>
                        <ul className="site-header__menu">
                            <li>
                                <Link to="/" className="site-header__menu-link">
                                    <i className="material-icons">dashboard</i>
                                    <p className="hidden-lg hidden-md">Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="site-header__menu-link">
                                    <i className="material-icons">person</i>
                                    <p className="hidden-lg hidden-md">Profile</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}


export default Header;