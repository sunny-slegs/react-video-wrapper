import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  render() {
      return <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' playing />
    }
  }


export default Player;