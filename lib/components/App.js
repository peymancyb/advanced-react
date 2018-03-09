import React from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';


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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount(){
      this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
      this.props.store.startClock();
  }
  componentWillUnmount(){
      this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
        let {articles, searchTerm} = this.state;
        if(searchTerm){
            articles = pickBy(articles,(value)=>{
                return value.title.match(searchTerm) || value.body.match(searchTerm);
            })
        }
    return (
        <div>
            <Timestamp/>
            <SearchBar doSearch = {this.props.store.setSearchTerm}/>
            <ArticleList
                articles={articles}
                store={this.props.store}
            />
        </div>
    );
  }
}
export default App;




// setSearchTerm = (searchTerm)=>{
//     this.setState({searchTerm});
// }


// import axios from 'axios';
// import DataApi from 'state-api';

// import { data } from '../testData';
// const api = new DataApi(data);





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
