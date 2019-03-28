import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playbackRate: 1,
      volume: .5,
    }

  }
  
  render() {

    const play = () => {
      this.setState ({
        playing: true
  
      })
    
    }
    const pause = () => {
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

    const incVolume = () => {
      console.log(this.state.volume)
      if (this.state.volume >= .9) {
        console.log("You cannot increase the volume, be kind to your ears!")
      } else {
        const newVolume = this.state.volume + .1;
        this.setState({
          volume: newVolume
        })
      }
    }

    const decVolume = () => {
      if (this.state.volume <= .1 ) {
        console.log("The volume can't get any lower") 
      } else {
        const newVolume = this.state.volume - .1;
        this.setState({ 
          volume: newVolume
        })
      }
    }
  
    return (
        <React.Fragment>
          <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' playing={this.state.playing}  
          playbackRate={this.state.playbackRate} volume={this.state.volume}/>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={incPlaybackRate}>Increase Playback Rate</button>
          <button onClick={decPlaybackRate}>Decrease Playback Rate</button>
          <button onClick={incVolume}>+</button>
          <span>Volume</span>
          <button onClick={decVolume}>-</button>
        </React.Fragment>
      )
    }
  }


export default Player;