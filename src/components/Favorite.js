import React from 'react';

class Favorite extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    this.props.removeCallback(this.props.book.id);
  }

  render(){

    if(this.props.book.volumeInfo.authors == null){
      var author = "None";
    } else {
      var author = "";
      this.props.book.volumeInfo.authors.forEach(function(a){
        if(author != ""){
          author += ", ";
        }
        author += a;
      });
    }

    return(
      <div className="p-1 mt-1 mb-1 bg-light d-flex flex-wrap">
        <div className="mr-auto d-flex">
          <div className="mr-1">
            <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail}></img>
            <h6><b>Author: </b><br/>{author}</h6>
            <h6><b>Date: </b><br/>{this.props.book.volumeInfo.publishedDate}</h6>
            <button className="btn btn-primary w-100" onClick={this.handleDelete}>Delete</button>
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

export default Favorite;
