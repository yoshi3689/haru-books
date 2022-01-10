import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { 
    fetchBooks,
    clearBooks, 
} from '../../actions/index';
import FiltersSetting from './FiltersSetting';


class SearchBar extends Component {

    componentDidMount(){
        const { fetchBooks, initialValues, books, searchBar } = this.props;
        if(!books) fetchBooks(
            searchBar ? searchBar.values :initialValues.term
            );
    }

    componentDidUpdate(prevProps) {
        const { filters, searchBar } = this.props;
        if(prevProps.filters !== filters && searchBar) {
            this.onSubmit(searchBar.values);
        }
    }

    renderError = ({ error, touched }) => {
        if(error && touched) {
            return(
                <div className="ui error message">
                    {error}
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field${meta.touched && meta.error ? ' error' : ''}`
        return(
            <div className={className}>
                <label className="label">{ label }</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = formValues => {
        const { clearBooks, fetchBooks } = this.props;
        if(formValues.term) {
            clearBooks();
            fetchBooks(formValues);
        }
    }


    render(){
        //console.log(this.props.auth);
        return (
            <div 
                className="ui container"
                style={{
                    margin: '10px 10px'}}
                >
                    
                <div 
                    ref={this.searchBarRef}
                    className="ui segment">
                    <form 
                        onSubmit={this.props.handleSubmit(this.onSubmit)}
                        className="ui form error">

                        <Field 
                            name="term" 
                            component={this.renderInput}
                            label={"Search"}/>

                    </form>

                    <FiltersSetting />

                    <br></br>

                    <div className="actions">
                        <button 
                            className= "ui button primary"
                            onClick={this.props.handleSubmit(this.onSubmit)}>
                            search
                        </button>
                    </div>
                </div>
            </div>
        );
    };
} 

const validate = (formValues) => {
    const errs = {};
    if(!formValues.term) {
        errs.term = 'Please enter a search term!'
    }
    return errs;
}

const formWrapped = reduxForm({
    form: 'searchBar',
    validate,
})(SearchBar);

const mapStateToProps = state => {
    return {
        books: state.books,
        filters: state.selections,
        searchBar: state.form.searchBar
    }
}

export default connect(mapStateToProps, {
    fetchBooks,
    clearBooks,
})(formWrapped);