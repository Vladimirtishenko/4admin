import React from 'react'
import ReactDOM from 'react-dom';

class Header extends React.Component {
	
	render () {
		return (
		   <header className="container-fluid">
			  <div className="row">
			    <div className="side-header col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
			      <div className="side-flex-area">
			      		<i aria-hidden="true" className="fa fa-bars fa-white side-open-menu"></i>
			      		<img src="http://4side.xyz/images/logo.png" alt="" className="side-header__logo"/>
			        <div className="side-header__left">
			        	<span className="side-lang-menu">
			        		<a href="?clang=" className="side-lang-menu__item">{this.props.val}</a>
			        	</span>
			        	<a href="/4admin/logout">
			        		<i aria-hidden="true" className="fa fa-sign-out fa-white"></i>
			        	</a>
			        </div>
			      </div>
			    </div>
			  </div>
			</header>
		);
	}	

}


export default Header;