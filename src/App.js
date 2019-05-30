import React from 'react';
import './App.css';
import {Header} from './components/Header';
import Nav from './components/Nav';
import Content from './components/Content';
import Axios from 'axios';
import {Footer} from './components/Footer';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {books: [], renderState: "home"};

    this.removeFavorite = this.removeFavorite.bind(this);
  }

  render(){

    return(
      <div className="container-fluid">
        <Header />
        <Nav
          submitCallback={(input) => this.handleSubmit(input)}
          favoritesCallback={() => this.handleFavorites()}
          homeCallback={() => this.handleHome()}
        />
        <Content 
          books={this.state.books} 
          removeCallback={(id) => this.removeFavorite(id)} 
          renderState={this.state.renderState}
        />
        <Footer />
      </div>
    );
  }

  handleHome(){
    this.setState({renderState: 'home'})
    console.log('home');
  }

  handleFavorites(){
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    if(favorites == null){
      favorites = {books: []};
    }
    this.setState({books: favorites.books, renderState: "favorites"});

  }

  removeFavorite(id){
    var favorites = JSON.parse(localStorage.getItem("favorites"));
    for(var i = 0; i < favorites.books.length; i++){
      if(favorites.books[i].id === id){
        favorites.books.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    this.setState({books: favorites.books, renderState: this.state.renderState})
  }


  handleSubmit(input){
    Axios.get("https://www.googleapis.com/books/v1/volumes?maxResults=40&q=" + input)
      .then(jsonData => {
        this.setState({books: jsonData.data.items, renderState: "search"});
      });
  }
}

export default App;
