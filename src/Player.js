import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playbackRate: 1
    }

   

  }




  
  
  render() {
    const playVideo = () => {
      this.setState ({
        playing: true
      })
    
    }
    const pauseVideo = () => {
      this.setState({
        playing: false
      })
    }

    const incPlaybackRate = () => {
      const newRate = this.state.playbackRate + 1;
      this.setState({
        playbackRate: newRate
      });
    }
    const decPlaybackRate = () => {
      if (this.state.playbackRate <= 1) {
        console.log("You cannot set a slower speed")
      } else {
        const newRate = this.state.playbackRate - 1;
        this.setState({
          playbackRate: newRate
        });
      }
    }
  
    return (
        <React.Fragment>
          <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' playing={this.state.playing}  playbackRate={this.state.playbackRate}/>
          <button onClick={playVideo}>Play</button>
          <button onClick={pauseVideo}>Pause</button>
          <button onClick={incPlaybackRate}>Increase Playback Rate</button>
          <button onClick={decPlaybackRate}>Decrease Playback Rate</button>
        </React.Fragment>
      )
    }
  }


export default Player;