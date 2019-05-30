import React from 'react';
import SearchResult from './SearchResult.js'
import Favorite from './Favorite.js'

class Content extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const renderState = this.props.renderState;
    if(renderState === "favorites"){
      return(
        <div id="content">
        {this.props.books.map(b => {
          return <Favorite removeCallback={id => this.props.removeCallback(id)} key={b.id} book={b}/>
        })}
        </div>
      );
    } else if(renderState === "search"){
      return(
        <div id="content">
        {this.props.books.map(b => {
          return <SearchResult key={b.id} book={b}/>
        })}
        </div>
      );
    } else if (renderState === 'home'){
      return (<div id="content">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
              <h1 className="display-4">Welcome!</h1>
              <p className="lead">
                This is an application where you can search for books you like and add them to and add them to your favorite list. 
              </p>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Content;
