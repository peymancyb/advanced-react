import React from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchTerm : ''
        };

    }
    doSearch = debounce(()=>{
        this.props.store.setSearchTerm(this.state.searchTerm);
    },300);
    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value},() => {
            this.doSearch();
        });
    }

    shouldComponentUpdate(){
        return true;
    }
    componentWillUpdate(nextProps,nextState){
        console.log('updating search bar...');
    }
    render(){
        return(
            <div>
                <input
                    type="search"
                    placeholder="Enter search term"
                    onChange={this.handleSearch}
                    value={this.state.searchTerm}
                />
            </div>
        );
    }
}

export default storeProvider()(SearchBar);





// for taking user inputs we can use ref attribute to take the value
// ref={(input) => this.searchInput = input}
