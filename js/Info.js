import React from 'react'
import { connect } from 'react-redux'
import { setSearchTerm } from './actionCreators'
import io from 'socket.io-client'
import Radium, { StyleRoot } from 'radium'
import style from './style/info'
import LivePlayer from './LivePlayer'
import Helmet from "react-helmet"

const { string, func, object } = React.PropTypes


class Info extends React.Component {
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
  }

  render () {
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
        <div style={style.container}>
          <LivePlayer />
          <h1 style={style.header}>SUBURB / RUSSIA</h1>
          <span style={style.text}>- the sound of russian suburb -</span>
          <span style={style.text}>Если вы хотите, чтобы ваша музыка играла на Suburb/Russia, отправьте нам свой материал на почту suburbrussia@gmail.com с пометкой в теме письма #Youlikeit (в виде #youlikeit#название ) и тремя хештегами (в самом письме) характеризующими ваш стиль. В скором времени ваша музыка вполне возможно будет в эфире.</span>
        </div>
        <div style={style.footer}>
          <div style={style.footerTop}>
            <div style={style.footLogo}>
              <img style={{ maxWidth: '400px', width: '200px', height: 'auto', alignSelf: 'center' }} src='/public/img/sbrb.png' alt='suburb' />
            </div>
            <div style={{ paddingBottom: '30px' }}>
              <span style={style.footerText}> © Suburb/Russia. Потоковое онлайн-вещание.
              </span>
              <span style={style.footerText}>Использование материалов Suburb/Russia разрешено только с предварительного согласия правообладателей. Все права на музыкальные произведения принадлежат их авторам. Возможно содержание контента, не предназначенного для лиц младше 16 лет.
              </span>
            </div>
          </div>
          <div style={style.footerBottom}>
            <span style={style.footerRights}>© All Right Reserved. SuburbRussia.</span>
            <span style={style.iconContainer}>
              <img src='../public/img/vk.svg' style={style.socialIcons}></img>
              <img src='../public/img/fb.svg' style={style.socialIcons}></img>
              <img src='../public/img/soundcloud.svg' style={style.socialIcons}></img>
            </span>
          </div>
        </div>
      </StyleRoot>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    searchTerm: state.searchTerm
  }
}

Info = Radium(Info)

export default connect(mapStateToProps)(Info)

