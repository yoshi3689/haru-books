import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchBook, fetchSavedBooks, saveBook } from '../../actions';
import BookModal from '../BookModal';

class BookSave extends Component {
    componentDidMount() {
        const { match, fetchBook} = this.props;
        fetchBook(match.params.volumeId);
        // this.props.fetchSavedBooks();
    }

    onClick = (book, userId) => {
        if(this.props.bookToCheck) {
            alert('this books is already in your bookshelf!')
        } else {
            this.props.saveBook(book, userId);
        }
    }

    render() {
        const { book, auth, match } =this.props;
        const isSavable = this.props.bookToCheck
        ? false : true;
        return (
            <>
                {book && 
                    <BookModal onClick={this.onClick} book={book} auth={auth} match={match} isSavable={isSavable} />
                }
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        book: state.book,
        bookToCheck: state.bookshelf && state.bookshelf[ownProps.match.params.volumeId],
        auth: state.auth,
    }
}

export default connect(mapStateToProps,{
    fetchBook, fetchSavedBooks, saveBook
})(BookSave);
