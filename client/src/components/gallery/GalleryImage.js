import React, { Component } from 'react';
import $ from 'jquery';

class GalleryImage extends Component {

  render() {
    return <img className={`${this.props.cls} border border-dark`} src={this.props.img}/>
  }
}
export default GalleryImage;
