import React from 'react';
import search from '../images/1x/baseline_search_white_24dp.png'

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFavorites = this.handleFavorites.bind(this);
  }

  handleInputChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    this.props.submitCallback(this.state.value);
    this.setState({value: ''});
    event.preventDefault();
  }

  handleFavorites(event){
    this.props.favoritesCallback();
  }

  render(){
    var home = (this.props.renderState == "home");
    var favorites = (this.props.renderState == "favorites");

    var searchNav = "";
    if(this.props.renderState == "search"){
      searchNav = <li className="nav-item active">
                    <a className="nav-link" href="#">Results</a>
                  </li>;
    }

    return(
      <nav className="navbar navbar-expand-md navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className={"nav-item " + (home ? 'active' : '')}>
                      <a className="nav-link" href="#" onClick={this.props.homeCallback}>Home</a>
                  </li>
                  <li className={"nav-item " + (favorites ? 'active' : '')}>
                      <a className="nav-link" href="#" onClick={this.handleFavorites}>Favorites</a>
                  </li>
                  {searchNav}
              </ul>
              <form className="form-inline my-2 my-lg-0" >
                  <input className="form-control mr-sm-2" value={this.state.value} onChange={this.handleInputChange} id="searchInput" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-dark my-2 my-sm-0" onClick={this.handleSubmit} type="submit"><img src={search} className="img-fluid" alt="search icon"></img></button>
              </form>
          </div>
      </nav>
    );
  }
}

export default Nav;
