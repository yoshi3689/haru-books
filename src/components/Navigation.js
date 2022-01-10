import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

//import history from './history';
import { getPath } from '../actions/index';
import OAuth from './OAuth';

class Navigation extends Component {

    componentDidMount() {
        this.getPath();
        this.onLocationChange();
    }

    componentDidUpdate(prevProps) {
        this.getPath();
        if(prevProps.path !== window.location.pathname) {
            this.onLocationChange();
        }
    }

    getPath = () => {
        this.props.getPath(window.location.pathname);
    }

    onLocationChange = () => {
        const {isSignedIn, userId} = this.props.auth;
        const routeConfig = isSignedIn && window.location.pathname === "/"
        ? {link: `/bookshelf/${userId}`, btnTxt: 'Bookshelf'}
        : {link: '/', btnTxt: 'Home'}
            return(
                <div className="item">
                    <Link to={routeConfig.link} className="ui button">
                        {routeConfig.btnTxt}
                    </Link>
                </div>      
            )
    }

    render() {
        return(
            <div className="ui">
                <div className="ui top sticky menu">
                    <div className="item">
                        <h2>Haru Books</h2>
                    </div>
                    <div className="item">
                        <OAuth />
                    </div>
                    {this.onLocationChange()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{ 
        auth: state.auth,
        path: state.path
     };
}

export default connect(mapStateToProps, {
    getPath
})(withRouter(Navigation));