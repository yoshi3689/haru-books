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
    state = { 
        width: window.innerWidth,};
    
    // should be an arrow function to avoid binding "this"
    getWidth = () => {
        const { innerWidth } = window;
        this.setState({ width: innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.getWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.getWidth);
    }
    
    render() {
    return (
        <div>
            <Router history={history} >
                <Navigation key={window.location.pathname} width={this.state.width} />
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