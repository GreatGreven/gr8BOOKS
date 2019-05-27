import React from 'react';
import SearchResult from './SearchResult.js'
import Favorite from './Favorite.js'

class Content extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const renderState = this.props.renderState;
    if(renderState == "favorites"){
      return(
        <div id="content">
        {this.props.books.map(b => {
          return <Favorite removeCallback={id => this.props.removeCallback(id)} key={b.id} book={b}/>
        })}
        </div>
      );
    } else if(renderState == "search"){
      return(
        <div id="content">
        {this.props.books.map(b => {
          return <SearchResult key={b.id} book={b}/>
        })}
        </div>
      );
    }
  }
}

export default Content;
