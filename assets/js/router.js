import React from 'react';
import {
  browserHistory,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from './components/main/main_list.jsx'
import User from './components/user/user_list.jsx'
import Pages from './components/pages/main_pages.jsx'
import Table from './components/widget/table/main_table.jsx'
import Carousel from './components/carousel/main_carousel.jsx'
import UpdatePage from './components/pages/create_update_page.jsx'

class Routers extends React.Component {
    render () {
        return (
          <Router history={browserHistory}>
            <div>
                <Route exact={true} path="/" component={Main} />
                <Route path="/users" component={User} />
                <Route path="/pages" component={Pages} />
                <Route path="/table" component={Table} />
                <Route path="/carousel" component={Carousel} />
                <Route path="/update_page" component={UpdatePage} />
            </div>
          </Router>
        );
    }
}

export default Routers;