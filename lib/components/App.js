import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

// import axios from 'axios';
// import DataApi from 'state-api';

// import { data } from '../testData';
// const api = new DataApi(data);

class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext(){
    return{
      store: this.props.store,
    };
  }

  state = this.props.store.getState();
  // state = {
  //   articles: this.props.initialData.articles,
  //   authors: this.props.initialData.authors,
  // };

  // async componentDidMount(){
  //   //fetching data
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //   this.setState({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   });
  // }

  //lookUpAuthor
  // articleActions = {
  //   lookUpAuthor: (authorId)=>this.state.authors[authorId],
  // };

    setSearchTerm = (searchTerm)=>{
        this.setState({searchTerm});
    }
  render() {
    return (
        <div>
            <SearchBar doSearch = {this.setSearchTerm}/>
            <ArticleList
                articles={this.state.articles}
                store={this.props.store}
            />
        </div>
    );
  }
}
export default App;
