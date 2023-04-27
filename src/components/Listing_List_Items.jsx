import React, { Component } from 'react';
import ListItem from './List_Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class ListingListItems extends Component {

  handleDelete = (movieId) => {
    const movies = this.state.movies.filter(c => c.id !== movieId);
    this.setState({ movies });
  };

  render() {
    const { onReset, movies, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Liked</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <>
              <ListItem
                key={movie.id}
                movie={movie}
                onDelete={onDelete}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                onReset={onReset}
                />
            <tr>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
              <td>
                <FontAwesomeIcon icon={faHeart} onClick={() => this.props.onLike(this.props.id)} className="btn btn-x"/>
              </td>
              <td>
                  <FontAwesomeIcon icon={faXmark} onClick={() => this.props.onDelete(this.props.id)} className="btn btn-x" />
              </td>
            </tr>
            </>
              ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default ListingListItems
