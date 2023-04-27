import React, { Component } from 'react';


class ListItem extends Component {
  render() {
    return (
      <div className="container">

        <div className="row align-items-center">
          <div className="col-md-4 d-flex justify-content-center">
          </div>
          <div className="col-md-8">
          </div>
        </div>
      </div>
    );
  }

  formatCount() {
    let { value } = this.props.movie;
    return value;
  }
}

export default ListItem
