import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSavedBook, fetchSavedBook } from '../../actions';
import BookModal from '../BookModal';


class BookShelfDelete extends Component {
    componentDidMount() {
        // since auth is pulled from the redux store, 
        // the initial val of it is null
        const { match, fetchSavedBook, auth} = this.props;
        console.log(match, fetchSavedBook, auth);
        
        fetchSavedBook(match.params.volumeId, match.params.userId);
    }

    render() {
        const { book, auth, match } =this.props;
        return (
            <>
                {book &&
                    <BookModal onClick={this.props.deleteSavedBook} book={book} auth={auth} match={match} />
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        book: state.savedBook,
        auth: state.auth,
        currentPath: state.path
    }
}

export default connect(mapStateToProps,{
    fetchSavedBook, deleteSavedBook
})(BookShelfDelete);