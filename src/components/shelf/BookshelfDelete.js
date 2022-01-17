import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSavedBook, fetchSavedBook } from '../../actions';
import BookModal from '../BookModal';


class BookShelfDelete extends Component {
    componentDidMount() {
        const { match, fetchSavedBook } = this.props;
        
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