import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

import {signIn, signOut} from '../actions/index';

class OAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                //this line below awaits the sign-in status to be changed,
                // and if the user is signed in, fire the function passed
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = isSignedIn => {
        const {signIn, signOut} = this.props;

        if(isSignedIn) {
            signIn(this.auth.currentUser.get().getId());
        } else {
            signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        const {isSignedIn} = this.props;

        if(isSignedIn === null) {
            return null;
        }
        const authConfig = isSignedIn 
            ? {text:'sign out', handler: this.onSignOutClick} 
            : {text: 'sign in',handler: this.onSignInClick};
        return (         
            <button
                onClick={authConfig.handler} 
                className="ui google plus button">
                <i className="google icon"></i>
                {authConfig.text}
            </button>)
    }

    render() {
        return(
            <>
                {this.renderAuthButton()}
            </>
        )
    }
}

const mapStateToProps = state => {
    //console.log(state.isSignedIn)
    return{
        isSignedIn: state.auth.isSignedIn,
    }
}

export default connect(
    mapStateToProps, 
    {signIn, signOut})(OAuth);