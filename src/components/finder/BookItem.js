import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class BookItem extends Component {
    constructor(props){
        super(props);
        this.imgRef = React.createRef();
        this.headerRef = React.createRef();
    }
    state = { 
        imgHeight: null, 
        headerHeight: null,};

    componentDidMount(){
        if(this.props.bookInfo.volumeInfo) {this.imgRef.current.addEventListener('load', this.setHeights);
        window.addEventListener('resize', this.setHeights);
  }  }

    componentWillUnmount(){
        if(this.props.bookInfo.volumeInfo) {this.imgRef.current.removeEventListener('load', this.setHeights);
        window.removeEventListener('resize', this.setHeights);}
    }

    setHeights = () => {
        const imgHeight = Math.ceil(this.imgRef.current.clientWidth * 1.3);
        this.setState({ imgHeight });

        const headerHeight = Math.ceil(this.headerRef.current.clientWidth * 0.26);
        this.setState({ headerHeight })
    }

    renderAuthors = (volumeInfo) => {
        const { authors } = volumeInfo; 
        const authorsToShow = authors 
        ? authors 
        : 'N/A';
                return(
                    <div 
                        className="description"
                        style={{
                            marginBottom: "auto"
                    }}
                    >
                        <i className="users icon"></i>
                        <span>{authorsToShow}</span>
                    </div>
                );
    }

    renderRetailPrice = ({retailPrice, saleability}) => {
        return(
            <div className="description"
                style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    marginBottom: "1rem"
            }}
            >imageLinks
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

    render(){
        const volumeId = `/${this.props.bookInfo.id}`;

        const link = window.location.pathname === '/'
        ? volumeId
        : window.location.pathname + volumeId;
        const { volumeInfo, saleInfo } = this.props.bookInfo;
        if(volumeInfo) {
        return (
            <div className="card">
                <div 
                    className="image"
                >
                    <img 
                        ref={this.imgRef}
                        src={volumeInfo.imageLinks 
                            ? volumeInfo.imageLinks.thumbnail
                            : '/img/square-image.png'
                        }
                        alt={volumeInfo.title}
                        style={{
                            height: `${this.state.imgHeight}px`
                        }}
                        />
                </div>
                <div 
                    className="content"
                    style={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <div 
                        ref={this.headerRef}
                        className="header"
                        id="card-header"
                        style={{
                            height: `${this.state.headerHeight}px`
                        }}
                        >
                        {volumeInfo.title}
                    </div>

                    {this.renderAuthors(volumeInfo)}
                    <br></br>
                    {this.renderRetailPrice(saleInfo)}
            
                </div>
                <Link 
                    to={link}
                    className="ui bottom attached button primary"
                >
                    See details
                </Link>
            </div>
        )
                    }
        return(
            <div>
                cant render this volume
            </div>
        )
    }
};

export default BookItem;