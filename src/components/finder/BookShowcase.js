import React, { Component } from 'react';
import BookItem from './BookItem';

class BookShowcase extends Component {
    state = { cardNum: "two" };

    updateCardNum = () => {
        let cardNum = 'two';
        const { innerWidth } = window;
        if (innerWidth > 700 && innerWidth < 1000 ) {
            cardNum = "three";
        } else if (innerWidth >= 1000) {
            cardNum = "five";
        } else if (innerWidth < 450) {
            cardNum = "one";
        } 
        this.setState({ cardNum: cardNum});
        }
    
        componentDidMount() {
            window.addEventListener('resize', this.updateCardNum);
        }

        componentWillUnmount() {
            window.removeEventListener('resize', this.updateCardNum);
        }
    
    renderResult = books => {
        if(books) {
            const result = books.length === 0 
            ? 'no books found'
            : books.length + 'items found ';

            return ( 
            <h2 className="label">
                {result}
            </h2>)
        }

        
        return(
            <h2 className="label">
                Loading...
            </h2>
            );
    }

    renderBookRows = books => {  
        if(books) {
            if(books.length > 1) {
                return books.map(book => {
                    return(
                        <BookItem 
                            key={book.id}
                            bookInfo={book}
                        />
                    );
                });
            } else if(books.length === 1) {
                return(
                    <BookItem 
                        key={books[0].id}
                        bookInfo={books[0]}
                    />
                );
            } 
        }
    }

    render(){
        const { books } = this.props;
        return (
            <div className="ui container">
                {this.renderResult(books)}    
                <div className={`ui ${this.state.cardNum} cards`}>
                    {this.renderBookRows(books)}
                </div>
            </div>
        )
    }
};

export default BookShowcase;