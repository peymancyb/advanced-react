import React from 'react';
import ArticleList from './ArticleList';
// import axios from 'axios';
// import DataApi from 'state-api';

// import { data } from '../testData';
// const api = new DataApi(data);

class App extends React.Component {
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

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        store={this.props.store}
      />

    );
  }
}
export default App;
