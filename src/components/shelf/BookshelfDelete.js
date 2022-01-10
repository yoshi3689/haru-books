import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSavedBook, fetchSavedBook } from '../../actions';
import BookModal from '../BookModal';


class BookShelfDelete extends Component {
    componentDidMount() {
        const { match, fetchSavedBook, auth} = this.props;
        fetchSavedBook(match.params.volumeId, auth.userId);
    }

    render() {
        console.log(this.props)
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