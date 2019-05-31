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

    if(this.props.book.volumeInfo.authors == null){
      var author = "None";
    } else {
      author = "";
      this.props.book.volumeInfo.authors.forEach(function(a){
        if(author != ""){
          author += ", ";
        }
        author += a;
      });
    }
    var image = '';
    if (this.props.book.volumeInfo.imageLinks != null) {
      var image = this.props.book.volumeInfo.imageLinks.smallThumbnail;
    }

    return(
      <div className="p-1 mt-1 mb-1 bg-light d-flex flex-wrap">
        <div className="mr-auto d-flex">
          <div className="mr-1">
            <img src={image}></img>
            <h6><b>Author: </b><br/>{author}</h6>
            <h6><b>Date: </b><br/>{this.props.book.volumeInfo.publishedDate}</h6>
            <button className="btn btn-primary w-100" onClick={this.handleSave}>Save</button>
          </div>

          <div>
            <h4>{this.props.book.volumeInfo.title}</h4>
            <p className="p-1">{this.props.book.volumeInfo.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResult;
