import React, { Component } from 'react'
import { connect } from 'react-redux';

import { 
    selectLanguage, selectFilter, selectPrintType, selectOrder, selectMaxResultNum 
} from '../../actions/index';
import Dropdown from './Dropdown';

class FiltersSetting extends Component {

    render() {
        const { 
            languages,
            filters,
            printTypes,
            orders,
            maxResultNums
        } = this.props.options;
        const {
            language, filter, printType, order, maxResultNum,
            selectLanguage, selectFilter, selectPrintType, selectOrder, selectMaxResultNum
        } = this.props;
         
        return (
                <>
                <Dropdown 
                        label={'language'}
                        options={languages}
                        selected={language}
                        onSelectedClick={selectLanguage}
                    />
        
                    <Dropdown 
                        label={'price filter'}
                        options={filters}
                        selected={filter}
                        onSelectedClick={selectFilter}
                    />
        
                    <Dropdown 
                        label={'print type'}
                        options={printTypes}
                        selected={printType}
                        onSelectedClick={selectPrintType}
                    />
                    <Dropdown 
                        label={'order'}
                        options={orders}
                        selected={order}
                        onSelectedClick={selectOrder}
                    />
                    <Dropdown 
                        label={'number of max results'}
                        options={maxResultNums}
                        selected={maxResultNum}
                        onSelectedClick={selectMaxResultNum}
                    />
                </>
        );
    }
    
}

const mapStateProps = (state) => {
    //console.log(state.selections);
    return {
        options: state.options,
        language: state.selections.LANGUAGE,
        filter: state.selections.FILTER,
        printType: state.selections.PRINTTYPE,
        order: state.selections.ORDER,
        maxResultNum: state.selections.MAX_RESULT_NUM
    };
};

export default connect(mapStateProps,{
    selectLanguage, selectFilter, selectPrintType, selectOrder, selectMaxResultNum
    })(FiltersSetting);