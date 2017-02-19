export default {
  button: {
    '@media (min-width: 320px) and (orientation: portrait)': {
      height: '200px',
      display: 'flex',
      justifyContent: 'center'
    },
    '@media (min-width: 600px) and (orientation: landscape)': {
      height: '60px',
      display: 'flex',
      justifyContent: 'center'
    },
    '@media (min-width: 1000px) and (orientation: landscape)': {
      height: '60px',
      display: 'flex',
      // justifyContent: 'center'
    }
  },
  song: {
    '@media (min-width: 320px) and (orientation: portrait)': {
      fontSize: '33px',
      color: 'white',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
    },
    '@media (min-width: 700px) and (orientation: landscape)': {
      color: 'white',
      fontSize: '16px',
      width: '100%',
      left: '50%',
      display: 'flex',
      fontWeght: '100',
      paddingLeft: '10px'
      // justifyContent: 'center'
    },
    '@media (min-width: 1000px) and (orientation: landscape)': {
      color: 'white',
      fontSize: '16px',
      width: '100%',
      left: '50%',
      display: 'flex',
      fontWeght: '100',
      paddingLeft: '10px'
      // justifyContent: 'center'
    },
  },
  container: {
    '@media (min-width: 320px) and (orientation: portrait)': {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(../../public/img/3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    '@media (min-width: 500px)': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url(../../public/img/3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    },
  },
}  