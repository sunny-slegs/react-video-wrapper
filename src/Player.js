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
      playedSeconds: 0,
      loadedSeconds: 0
    }

  }
  
  play = () => {
    this.setState ({
      playing: true

    })
  
  }
  pause = () => {
    this.setState({
      playing: false
    })
  }
  
  // Decrease playback rate
  incPlaybackRate = () => {
    const newRate = this.state.playbackRate + 1;
    this.setState({
      playbackRate: newRate
    });
  }
  // Increase playback rate
  decPlaybackRate = () => {
    if (this.state.playbackRate <= 1) {
      console.log("You cannot set a slower speed")
    } else {
      const newRate = this.state.playbackRate - 1;
      this.setState({
        playbackRate: newRate
      });
    }
  }
  // Increase volume
  incVolume = () => {
    if (this.state.volume >= .9) {
      console.log("The volume can't go any higher")
    } else {
      const newVolume = this.state.volume + .1;
      this.setState({
        volume: newVolume
      })
    }
  }
    
// Decrease volume
  decVolume = () => {
    if (this.state.volume <= .1 ) {
      console.log("The volume can't go any lower") 
    } else {
      const newVolume = this.state.volume - .1;
      this.setState({ 
        volume: newVolume
      })
    }
  }
  // Toggle mute state
  mute = () => {
    const muteStatus =  this.state.mute;
    this.setState({
      mute: !muteStatus
    })
  }
// Toggle captions state
    captions = () => {
      const captionState = this.state.captions;
      this.setState({
        captions: !captionState
      })
    }

    ref = player => {
      this.player = player
    }

    onProgress = e => {
      console.log(e)
      this.setState(e)
    }
// Jump forward 10 seconds
    seekForward = () => {
      this.player.seekTo(this.state.playedSeconds + 10)
    }

// Jump back 10 seconds
seekBack = () => {
  this.player.seekTo(this.state.playedSeconds - 10)
}
// Seek within the video and see the progress
// Show the seconds elapsed and the duration
  render() {
  // Toggle mute/unmute button
    if (this.state.mute === false) {
      this.muteButton = "Mute"
    } else {
      this.muteButton = "Unmute"
    }
//Toggle caption show/hide button and config setting
    if (this.state.captions === false) {
        this.config = {file: {}}
        this.captionButton = "Show Closed Captions"
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
          <ReactPlayer url='http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4' 
          ref={this.ref}
          playing={this.state.playing}  
          playbackRate={this.state.playbackRate} 
          volume={this.state.volume} 
          muted={this.state.mute}
          onDuration={this.onDuration}
          onProgress={this.onProgress}
          onSeek={this.onSeek}
          config={this.config}
          />
          <button onClick={this.play}>Play</button>
          <button onClick={this.pause}>Pause</button>
          <button onClick={this.incPlaybackRate}>Increase Playback Rate</button>
          <button onClick={this.decPlaybackRate}>Decrease Playback Rate</button>
          <button onClick={this.incVolume}>+</button>
          <span>Volume</span>
          <button onClick={this.decVolume}>-</button>
          <button onClick={this.mute}>{this.muteButton}</button>
          <button onClick={this.captions}>{this.captionButton}</button>
          <button onClick={this.seekForward}>Jump Forward 10 Seconds</button>
          <button onClick={this.seekBack}>Jump Back 10 Seconds</button>
        </React.Fragment>
      )
    }
  }
  


export default Player;