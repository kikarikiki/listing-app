import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/app.scss'
import ListingListItems from './components/Listing_List_Items';


class App extends Component {

  state = {
    movies: [
      { id: 1, title: 'Her', genre: '', rating: 5, liked: true },
      { id: 2, title: 'The Fall', genre: '', rating: 4.5, liked: false },
      { id: 3, title: 'Lars and the real girl', genre: '', rating: 4, liked: false },
      { id: 4, title: 'Tár', genre: '', rating: 3, liked: false }
    ]
  };

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter(c => c.id !== movieId);
    this.setState({ movies });
  };

  handleIncrement = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].value++;
    this.setState({ movies });
  };

  handleDecrement = (movie) => {
    const movies = [...this.state.movies];
    const index = movie.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].value--;
    return (movies[index].value > 0) ? this.setState({ movies }) : 0;
  };

  handleReset = () => {
    const movies = this.state.movies.map(c => {
      c.value = 1;
      return c;
    });
    this.setState({ movies });
  };

  render() {

    return (
    <>
      <main className='container'>
        <ListingListItems
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          movies={this.state.movies}
        />
      </main>
    </>
    )
  }
}

export default App
