import React, {Component} from 'react';
import {Router, Route, Link, browserHistory} from 'react-router';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '', 
      results: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    
    fetch(`http://omdbapi.com?s=${this.state.query}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.setState({results: data.Search})
      })
      .catch(error => {
        this.setState({results: null});
      });
  }

  render() {
    const results = this.state.results.map((movie, idx) => {
      return (
        <div className="well" key={idx}>
          <h2><Link to={`/results/${movie.imdbID}`} >{movie.Title}</Link></h2>
        </div>
      )
    })
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            value={this.state.query} 
            onChange={(event) => this.setState({query: event.target.value})}
            onSubmit={this.handleSubmit}
            className="form-control"/>
        </form>
        <div>{results}</div>
      </div>
    )
  }
}

export default SearchBar;