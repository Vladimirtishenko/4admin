import React from 'react';
import ReactDOM from 'react-dom';

class Search extends React.Component {
    render () {
        return(
            <form className="site-search-form "
                  role="search">
                <input type="text" className="site-search-form__input active"
                       placeholder="Search"/>
                <button type="submit" className="site-search-form__btn">
                    <i className="site-search-form__btn-i material-icons">search</i>
                </button>
            </form>
        )
    }

}


export default Search;