import React from 'react';
import debounce from 'lodash.debounce';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchTerm : ''
        };

    }
    doSearch = debounce(()=>{
        this.props.doSearch(this.state.searchTerm);
    },300);
    handleSearch = (event) => {
        this.setState({searchTerm: event.target.value},() => {
            this.doSearch();
        });
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

export default SearchBar;



// for taking user inputs we can use ref attribute to take the value
// ref={(input) => this.searchInput = input}
