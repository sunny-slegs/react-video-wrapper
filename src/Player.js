import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      playbackRate: 1,
      volume: .5,
      mute: false,
      captions: false,
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
      if (this.state.volume >= .9) {
        console.log("The volume can't go any higher")
      } else {
        const newVolume = this.state.volume + .1;
        this.setState({
          volume: newVolume
        })
      }
    }

    const decVolume = () => {
      if (this.state.volume <= .1 ) {
        console.log("The volume can't go any lower") 
      } else {
        const newVolume = this.state.volume - .1;
        this.setState({ 
          volume: newVolume
        })
      }
    }
// toggle mute state
    const mute = () => {
      const muteStatus =  this.state.mute;
      this.setState({
        mute: !muteStatus
      })
    }
  // Toggle mute/unmute button
    if (this.state.mute === false) {
      this.muteButton = "Mute"
    } else {
      this.muteButton = "Unmute"
    }
// Toggle captions state
    const captions = () => {
      const captionState = this.state.captions;
      this.setState({
        captions: !captionState
      })
    }
//Toggle caption show/hide button and config setting
    if (this.state.captions === false) {
        this.config = {file: {}}
        this.captionsButton = "Show Closed Captions"
    } else {
       this.config = {file: {
          tracks: [
            {kind: 'captions', src: '/Users/sonyaslegers/Desktop/touch-to/src/audio-eng.vtt', srcLang: "en", default: true}
          ]
        }};
        this.captionButton = "Hide Closed Captions"
    };
    
    return (
        <React.Fragment>
          <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' playing={this.state.playing}  
          playbackRate={this.state.playbackRate} volume={this.state.volume} muted={this.state.mute}
          config={this.config}/>
          <button onClick={play}>Play</button>
          <button onClick={pause}>Pause</button>
          <button onClick={incPlaybackRate}>Increase Playback Rate</button>
          <button onClick={decPlaybackRate}>Decrease Playback Rate</button>
          <button onClick={incVolume}>+</button>
          <span>Volume</span>
          <button onClick={decVolume}>-</button>
          <button onClick={mute}>{this.muteButton}</button>
          <button onClick={captions}>{this.captionButton}</button>
        </React.Fragment>
      )
    }
  }
  


export default Player;