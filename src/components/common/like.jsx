import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';
library.add(fasFaHeart, farFaHeart)

class Like extends Component() {

  render() {
    return (<FontAwesomeIcon icon={farFaHeart} />)
  }
}

export default Like
