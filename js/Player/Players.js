import React from 'react'
import { connect } from 'react-redux'
// import io from 'socket.io-client'
import Radium, { StyleRoot } from 'radium'

import style from '../style/liveplayer'



class Players extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      song: '',
      loaded: false,
    }
    this.audio = null;
    this.togglePlay = this.togglePlay.bind(this)
  }
  togglePlay () {
    if (this.state.playing) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
    this.setState({ playing: !this.state.playing })
  }
  componentDidMount () {
    this.audio = document.createElement('audio');

    this.audio.preload = 'metadata';
    // this.audio.addEventListener('play', console.log);
    // this.audio.addEventListener('pause', this.audioPauseListener);
    // this.audio.addEventListener('ended', this.audioEndListener);
    this.audio.addEventListener('loadedmetadata', this.audioMetadataLoadedListener);
    this.audio.addEventListener('canplay', this.setState({ loaded: true }), false);
    this.audio.src = 'http://46.32.69.199:8000/live96';
    this.togglePlay = this.togglePlay.bind(this)
  }

  render () {
    let element
    if (this.state.playing) {
      element = (<svg fill="#fff" viewBox="0 0 24 24" height="100%" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>)
    } else {
      element = (<svg fill="#fff" viewBox="0 0 24 24" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5v14l11-7z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>)
    }

    return (
      <StyleRoot>
        <div style={style.button}
          onClick={this.togglePlay}
        >
          {element}
        </div>
      </StyleRoot>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    fuck: state.searchTerm
  }
}

Players = Radium(Players)

export default connect(mapStateToProps)(Players)
