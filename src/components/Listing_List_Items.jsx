import React, { Component } from 'react';
import ListItem from './List_Item';

class ListingListItems extends Component {
  render() {
    const { onReset, movies, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <>
        {/*<button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
    </button>*/}
        {movies.map(movie => (
          <ListItem
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            />
          ))}
      </>
    );
  }
}

export default ListingListItems
