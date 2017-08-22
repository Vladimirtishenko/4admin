import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    sandwichMenu(event){
        var daxContent = document.querySelector(".dax-content");
        (daxContent.classList.contains("dax-sidebar-open")) ? daxContent.classList.remove("dax-sidebar-open") :
            daxContent.className += " dax-sidebar-open";


    }

    render () {

        return (
            <div className="head-wrapper">
                <div className="container-fluid">
                    <div className="dax-header">
                        <button onClick={this.sandwichMenu} type="button"
                                className="dax-head__mobile-toggle hidden-md hidden-lg">
                            <span className="dax-head__mobile-toggle-icon-bar"></span>
                            <span className="dax-head__mobile-toggle-icon-bar"></span>
                            <span className="dax-head__mobile-toggle-icon-bar"></span>

                        </button>
                        <a className="dax-head__logo" href="#">Material Dashboard</a>
                    </div>
                    <div className="dax-header__desktop">
                        <form className="dax-header__desktop-search-form" role="search">
                            <input type="text" className="dax-desktop-header__search-input active"
                                       placeholder="Search"/>
                            <button type="submit" className="dax-desktop-header__search-btn">
                                <i className="material-icons">search</i>
                            </button>
                        </form>
                        <ul className="dax-header__menu">
                            <li>
                                <Link to="/" className="dax-header__menu-link">
                                    <i className="material-icons">dashboard</i>
                                    <p className="hidden-lg hidden-md">Dashboard</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="dax-header__menu-link">
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