import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import ReactPlayer from 'react-player'
import { setSearchTerm } from './actionCreators'
import io from 'socket.io-client'
import Radium, { StyleRoot } from 'radium'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { green100, green500, green700 } from 'material-ui/styles/colors';
import Helmet from "react-helmet"
import axios from 'axios'

import AudioPlayer from './Player/AudioPlayer'
import style from './style/liveplayer'

const { string, func, object } = React.PropTypes


class LivePlayer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      playing: false,
      song: ''
    }
    this.togglePlay = this.togglePlay.bind(this)
  }
  togglePlay () {
    this.setState({ playing: !this.state.playing })
  }
  componentDidMount () {
    // const socket = io('http://localhost:5050')
    const socket = io()
    socket.on('news', function (data) {
      this.setState({ song: data.hello })
    }.bind(this))
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

    var playlist =
  [{ url: 'http://46.32.69.199:8000/live96',
     displayText: 'Track 1 by Some Artist' },
   { url: 'audio/track2.mp3',
     displayText: 'Some Other Artist - Track 2' }];

    return (
      <StyleRoot>
          <div style={{ display: 'flex', width: '100vw', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', left: 0, top: 0 }}>
            {/*<div style={style.button} onClick={this.togglePlay}>
              {element}
            </div>*/}
            <AudioPlayer playlist={playlist} hideBackSkip />
            <div style={style.song}>
              {this.state.song}
            </div>
          </div>
        <ReactPlayer
          url='http://46.32.69.199:8000/live96'
          playing={this.state.playing}
          width={0}
          height={0}
          hidden
        />
      </StyleRoot>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    fuck: state.searchTerm
  }
}

LivePlayer = Radium(LivePlayer)

export default connect(mapStateToProps)(LivePlayer)
