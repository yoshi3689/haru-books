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
    //reference
    /* setSpans = () => {
        //console.log(this.imgRef.current.clientHeight);
        const imgHeight = this.imgRef.current.clientHeight;
        const spanNum = Math.ceil(imgHeight / 10);
        this.setState({span: spanNum});
    } */
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

    renderRetailprice = ({retailPrice, saleability}) => {
        return(
            <div className="description"
                style={{
                    marginTop: "auto",
                    paddingTop: "1rem",
                    marginBottom: "1rem"
            }}
            >
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

//     Cookie “G_ENABLED_IDPS” will be soon rejected because it has the “SameSite” attribute set to “None” or an invalid value, without the “secure” attribute. To know more about the “SameSite“ attribute, read https://developer.mozilla.org/docs/Web/HTTP/Headers/Set-Cookie/SameSite cb=gapi.loaded_0:274:21
// Content Security Policy: Ignoring “'unsafe-inline'” within script-src: ‘strict-dynamic’ specified
// Content Security Policy: Ignoring “https:” within script-src: ‘strict-dynamic’ specified
// Content Security Policy: Ignoring “http:” within script-src: ‘strict-dynamic’ specified
// Content Security Policy: Ignoring “'unsafe-inline'” within script-src: ‘strict-dynamic’ specified
// Content Security Policy: Ignoring “https:” within script-src: ‘strict-dynamic’ specified
// Content Security Policy: Ignoring “http:” within script-src: ‘strict-dynamic’ specified
// Some cookies are misusing the recommended “SameSite“ attribute

    render(){
        const volumeId = `/${this.props.bookInfo.id}`;

        const link = window.location.pathname === '/'
        ? volumeId
        : window.location.pathname + volumeId;
        //console.log(link);

        const { volumeInfo, saleInfo } = this.props.bookInfo;
        //console.log(volumeInfo, this.props.bookInfo)
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
                    {this.renderRetailprice(saleInfo)}
            
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