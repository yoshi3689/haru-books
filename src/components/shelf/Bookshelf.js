import React, {Component} from 'react';
import { connect } from 'react-redux';
import BookShowcase from '../finder/BookShowcase';
import { fetchSavedBooks } from '../../actions/index';

class Bookshelf extends Component {
    componentDidMount() {
        this.props.fetchSavedBooks();
    }
    
    render() {
        //console.log(this.props.books);
        return(
            <div>
                <div className="ui container">
                    <h1> Shelf </h1>
                </div>
                {this.props.books &&
                    <BookShowcase books={Object.values(this.props.books)} pathname={this.props.match.url} />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {books : state.bookshelf};
}

export default connect(mapStateToProps, {
    fetchSavedBooks
})(Bookshelf);