import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import BookFinder from './finder/BookFinder';
import Bookshelf from './shelf/Bookshelf';
import './App.css';

import BookSave from './finder/BookSave';
import BookshelfDelete from './shelf/BookshelfDelete';
import history from './history';




class App extends Component {

    render() {
    return (
        <div>
            <Router history={history} >
                <Navigation key={window.location.pathname} />
                <Route exact path="/" component={BookFinder} />
                <Route exact path="/:volumeId" component={BookSave} />

                <Route exact path="/bookshelf/:userId" component={Bookshelf} />
                <Route exact path="/bookshelf/:userId/:volumeId" component={BookshelfDelete} />

            </Router>
        </div>
    )
    }
};

export default connect(null,
    )(App);