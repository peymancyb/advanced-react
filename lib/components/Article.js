import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article:{
    paddingBottom: 5,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom:10
  },
  title:{
    fontWeight:'bold'
  },
  date:{
    fontSize:'0.85em',
    color:'#888'
  },
  author:{
    paddingTop: 10,
    paddingBottom: 10
  },
  body:{
    paddingLeft: 20
  }
};

const dateDisplay = (date) => new Date(date).toDateString();

const Article = (props) => {
    const {article , author} = props;

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>
        {dateDisplay(article.date)}
      </div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName} {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};


Article.propTypes = {
  article: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,

  })
};

function extraProps(store,originalProps){
    return {
        author: store.lookupAuthor(originalProps.article.authorId),
    };
}


export default storeProvider(extraProps)(Article);











// const {article , store} = props;
// const author = store.lookupAuthor(article.authorId);

// const ArticleContainer = (props, {store}) => {
//     return <Article {...props} store = {store} />
// };
//
// ArticleContainer.contextTypes = {
//     store: PropTypes.object,
// }