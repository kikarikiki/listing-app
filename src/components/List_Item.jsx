import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
library.add(fasFaStar, farFaStar, faStarHalfAlt)


class ListItem extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={() => this.props.onDelete(this.props.movie.id)} className="btn btn-x">
          <FontAwesomeIcon icon={faXmark} className='fs-5'/>
        </button>
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
