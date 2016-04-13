import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router';
import SearchBar from './components/search_bar';
import About from './components/about';
import ShowMovie from './components/show_movie';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Router history={browserHistory}>
          <Route path="/" component={SearchBar} />
          <Route path="/about" component={About} />
          <Route path="/results/:imdbID" component={ShowMovie} />
        </Router>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));