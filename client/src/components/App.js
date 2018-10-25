import React, { Component } from 'react';
import axios from 'axios';
import RelatedLists from './carousel/RelatedLists';
import Gallery from './gallery/Gallery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      room: {}
    }
  }

  //need current User

  componentDidMount() {
    axios.get('http://localhost:4000/room/15').then(({ data }) => {
      this.setState({
        room: data[0]
      });
    });
  }

  //need to implement
  // saveToFavorite (id) {
  //   this.state.user.favorites.push(id)
  // }

  render() {
  
    var showCarousel = false;

    return (
        <div>
          <div style={{height: '80px'}}></div>
          {this.state.room.thumbNail ? <Gallery thumbNail={this.state.room.thumbNail} imgs={this.state.room.imgs}/> : ""}
          {this.state.room.related && showCarousel ? <RelatedLists related={this.state.room.related} /> : ""}
        </div>


      
    )
  }
}

export default App;
