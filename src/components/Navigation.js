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

    renderMenu = () => {
        return this.props.width > 600 ?  (
        <>
            <div className="item" />
            <div className="item">
                <OAuth />
            </div>
            {this.onLocationChange()}
        </>
        )
        :(
            <>
            <div className='item' />
            <div className="ui dropdown icon item">
                <i className="wrench icon"></i>
                <div className="menu">
                    <div className="item">
                        <OAuth />
                    </div>
                    {this.onLocationChange()}
                </div>
            </div>
            </>
        )
    }

    render() {
        return(
            <div className="ui">
                <div className="ui top attached menu">
                    <div className='ui container'>
                        <div className='ui container'>
                            <h2 style={{marginTop: "0.5rem", marginLeft: "1rem"}}>Haru Books</h2>
                        </div>
                        {this.renderMenu()}
                    </div>
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