import React, {useState, useEffect, useRef} from 'react';
// import { connect } from 'react-redux';

const Dropdown = ( { label, options, selected, onSelectedClick} ) => {
    //console.log(selected, options);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        
        const onBodyClick = (event) => {
            if(ref.current && ref.current.contains(event.target)) return;
            setIsOpen(false);
        }
        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        }
    },[])

    const renderedOptions = options.map((option) => {
        if (selected.value === option.value) {
            return null;
        }
        return (
            <div 
            key= {option.value}
            className="item"
            onClick={() => onSelectedClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
    <div ref={ref} className="ui form">

        <div className="field">

            <label className="label">select a {label} </label>

            <div 
            onClick={() => {
                setIsOpen(!isOpen)
            }}
            className= {`ui selection dropdown ${isOpen && 'visible active'}`}>
                <i className="dropdown icon"></i>
                <div 
                className="text"> {selected.label} </div>

                <div className={`menu ${isOpen && 'visible transition'}`}>
                    {renderedOptions}
                </div>
            </div>
            
        </div>

    </div>
    )
}

/*solution to connecting a grandchild component to redux store https://react-redux.js.org/using-react-redux/connect-mapdispatch */

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         onClick: (option) => dispatch(ownProps.onSelectedClick(option))
//     }
// }

export default Dropdown;