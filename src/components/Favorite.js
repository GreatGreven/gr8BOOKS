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
    return(
      <div className="p-1 mt-1 mb-1 bg-light">
        <h4>{this.props.book.volumeInfo.title}</h4>
        <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}

export default Favorite;
