import React from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client'
import Radium, { StyleRoot } from 'radium'
import Players from './Player/Players'
import style from './style/liveplayer'


class LivePlayer extends React.Component {
  constructor (props) {
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

    return (
      <StyleRoot>
        <div style={{ display: 'flex', width: '100vw', justifyContent: 'flex-start', alignItems: 'center', position: 'absolute', left: 0, top: 0 }}>
          <Players />
          <div style={style.song}>
            {this.state.song}
          </div>
        </div>
      </StyleRoot>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // fuck: state.searchTerm
  }
}

LivePlayer = Radium(LivePlayer)

export default connect(mapStateToProps)(LivePlayer)
