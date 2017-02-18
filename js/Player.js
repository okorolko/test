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
import {green100, green500, green700} from 'material-ui/styles/colors';
import Helmet from "react-helmet"
import axios from 'axios'
import infoStyle from './style/info'

const { string, func, object } = React.PropTypes


class Player extends React.Component {
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
    const socket = io('http://localhost:5050')
    socket.on('news', function (data) {
      this.setState({ song: data.hello })
    }.bind(this))
    axios.get('/test', function() {
      console.log(12345)
    })
  }

  render () {
    const iconStyles = {
      marginRight: 24,
    }
    let element;
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

    var style = {
      song: {
        '@media (min-width: 320px)': {
          fontSize: '40px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        },
        '@media (min-width: 500px)': {
          fontSize: '25px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        },
      },
      button: {
        '@media (min-width: 320px)': {
          height: '300px',
          display: 'flex',
          justifyContent: 'center'
      },
        '@media (min-width: 500px)': {
          height: '70px',
          display: 'flex',
          justifyContent: 'center'
        },
      }

    }
    return (
        <StyleRoot>
          <Helmet
            title='Suburb / Russia'
            meta={[
              {"name": "description", "content": "Suburb Russia Radio St.Petersburg"},
              {"name": "keywords", "content": "Suburb Russia"},
              {"name": "og:url", "content": "http://suburbrussia.com"},
            ]}

          />
          <div style={infoStyle.container}>
            <div style={infoStyle.button} onClick={this.togglePlay}>
              {element}
            </div>
            <ReactPlayer url='http://46.32.69.199:8000/live96'
              playing={this.state.playing}
              width={0}
              height={0}
            />
            <div style={infoStyle.song} className="song-name">
              {this.state.song}
            </div>
            <div style={{ position: 'absolute', bottom: '30px', right: '30px' }}>
              <Link style={{fontSize: '50px', color: 'white' }} to='/info'>Info</Link>
            </div>
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

Player = Radium(Player)

export default connect(mapStateToProps)(Player)


// const Landing = React.createClass({
//   contextTypes: {
//     router: object
//   },
//   propTypes: {
//     searchTerm: string,
//     dispatchSetSearchTerm: func
//   },
//   handleSearchTermChange (event) {
//     this.props.dispatchSetSearchTerm(event.target.value)
//   },
//   handleSearchSubmit (event) {
//     event.preventDefault()
//     this.context.router.transitionTo('/search')
//   },
//   render () {
//     return (
//       <div className='landing'>
//         <h1>svideo</h1>
//         <ReactPlayer url='http://46.32.69.199:8000/live96' playing />
//         <form onSubmit={this.handleSearchSubmit}>
//           <input onChange={this.handleSearchTermChange} value={this.props.searchTerm} type='text' placeholder='Search' />
//         </form>
//         <Link to='/search'>or Browse All</Link>
//       </div>
//     )
//   }
// })