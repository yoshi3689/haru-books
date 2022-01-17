import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';


class BookModal extends Component {
    constructor(props) {
        super(props);
        this.descRef = React.createRef();
    }
    buyLink

    renderRetailprice = ({retailPrice, saleability}) => {
        return(
            <div className="description" id="retail-price">
                <i className="money bill alternate icon"></i>
                <span>
                    {retailPrice
                        ? retailPrice.currencyCode + " " + retailPrice.amount 
                        : saleability
                        }
                </span>
            </div>
        )
}

    renderAdmin = () => {
        const { auth, book, onClick, isSavable } = this.props;
        if(auth.isSignedIn && isSavable) {
            return(
                <button
                    onClick={() => onClick(book, auth.userId)} 
                    className="ui negative button">
                    Save to Bookshelf
                </button>
            )

        } else if( window.location.pathname.includes('bookshelf') ) {
            return(
                <button
                    onClick={() => onClick(book.id, auth.userId)} 
                    className="ui negative button">
                    Delete from Bookshelf
                </button>
            )
        } return null;
    }

    render() {
        const { volumeInfo } = this.props.book
        if(this.props.book) {
            return(
                <>
                    <Modal>
                        <div className="header">
                            {volumeInfo.title}
                        </div>
                            <div 
                            className = "ui container"
                            id="modal-container"
                            >

                                    <div className="image" id="modal-image">
                                        <img 
                                            className="big-thumbnail"
                                            src={volumeInfo.imageLinks 
                                                ? volumeInfo.imageLinks.thumbnail
                                                : '/img/square-image.png'
                                            }
                                            alt={volumeInfo.title}
                                            />
                                    </div>

                                    <div className="content" id="modal-content">
                                        <p className="description" id="modal-description">
                                            <i className="file alternate icon"></i>
                                            {volumeInfo.description 
                                            ? volumeInfo.description 
                                            : 'N/A'}
                                        </p>

                                        <div 
                                            className="description" id="authors"
                                            ref={this.descRef}>
                                            <i className="users icon"></i>
                                                <span>{
                                                    volumeInfo.authors 
                                                    ? volumeInfo.authors 
                                                    : 'N/A'
                                                }</span>
                                        </div>
                                    </div>
                            </div>
                        
                        <div className="actions" id="modal-actions">

                            <a className="ui primary button" 
                            href={volumeInfo.previewLink} 
                            >
                                preview on GoogleBooks
                            </a>
                            {this.renderAdmin()}

                            <Link
                                to={this.props.match.url.replace(`/${this.props.match.params.volumeId}`, '')}
                                className="ui button">
                                Go Back
                            </Link>
                        </div>
                    </Modal>
                </>
            )
        }
    }
}

export default BookModal;