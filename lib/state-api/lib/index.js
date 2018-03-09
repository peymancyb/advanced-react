class StateApi{
  constructor(rawData){
    // this.rawData = rawData;
      this.data = {
        articles: this.mapIntoObject(rawData.articles),
        authors: this.mapIntoObject(rawData.authors),

      }
  }
  mapIntoObject(arr){
    return arr.reduce((acc , curr) => {
      acc[curr.id] = curr;
      return acc;
    },{});
  }
  // getArticles(){
  //   return this.mapIntoObject(this.rawData.articles);
  // }
  // getAuthors(){
  //   return this.mapIntoObject(this.rawData.authors);
  // }
  lookupAuthor = (authorId) => {
  return this.data.authors[authorId];
  }
  getState = () => {
    return this.data;
  }

}

export default StateApi;
