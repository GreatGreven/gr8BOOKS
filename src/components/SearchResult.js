import React from 'react';

class SearchResult extends React.Component {
  constructor(props){
    super(props);
    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(event){
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    if(favorites == null){
      favorites = {books: []};
    }
    //kolla om boken redans finns i favoriter
    var duplicate = false;
    var id = this.props.book.id;
    favorites.books.forEach(function(b){
      if(favorites.books.filter(e => e.id == id).length > 0){
        duplicate = true;
      }
    })
    if(!duplicate){
      favorites.books.push(this.props.book);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }

  render(){
    return(
      <div className="p-1 mt-1 mb-1 bg-light">
        <h4>{this.props.book.volumeInfo.title}</h4>
        <button className="btn btn-primary" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default SearchResult;
