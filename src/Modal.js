import { Component } from 'react';
import ReactDOM from 'react-dom';

//can I make this below one line dynamic so that I can pass a prop in place pf '#modal'
const rootDiv = document.querySelector('#modal');
class Modal extends Component {

    constructor(props){
        super(props);
        this.ourModalDiv = document.createElement('div');
    }

   componentDidMount(){
       rootDiv.appendChild(this.ourModalDiv);
   }

   componentWillUnmount(){
       rootDiv.removeChild(this.ourModalDiv);
   }

    render(){
        return ReactDOM.createPortal(
            <div 
                onClick={this.props.onClick}
                className="ui dimmer modals visible active"
                id="modal-background"
                >
                
                <div 
                    onClick={(e)=> e.stopPropagation()}
                    className="ui modal visible active"
                    id="modal-wrapper"
                    >
                    {this.props.children}
                </div>
            </div>
            ,this.ourModalDiv
        );
    }
};

export default Modal;

/*constructor(props){
         super(props);
         this.ourModalDiv = document.createElement('div');
     }

    componentDidMount(){
        rootDiv.appendChild(this.ourModalDiv);
    }

    componentWillUnmount(){
        rootDiv.removeChild(this.ourModalDiv);
    } */