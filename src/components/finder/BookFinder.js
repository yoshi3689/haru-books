import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import BookShowcase from './BookShowcase';
import { fetchBooks } from '../../actions/index';

class BookFinder extends Component {
    render() {
        const initialValues = {term: "apple"};
    return (
        <div>
            <SearchBar initialValues={initialValues}/>
            {this.props.books &&
                <BookShowcase books={Object.values(this.props.books)} pathname={this.props.match.url} width={this.props.width} />
            }
        </div>
    )
    }
};
const mapStateToProps = state => {
    return {books : state.books};
}

export default connect(mapStateToProps, {
    fetchBooks
})(BookFinder);
