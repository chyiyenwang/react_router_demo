import React, {Component} from 'react';

class ShowMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {movie: null}

    this.getData();
  }

  getData() {
    fetch(`http://omdbapi.com/?i=${this.props.params.imdbID}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
          this.setState({movie: data})
      })
      .catch(error => {
        this.setState({movie: null})
      });
  }
  
  render() {
    const movie = this.state.movie;
    if (!movie) return <h1>Loading...</h1>

    return (
      <div className="show-movie">
        <h1>{movie.Title}</h1>
      </div>
    )
  };
};

export default ShowMovie;