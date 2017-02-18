
export default {
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
    header: {
      '@media (min-width: 320px)': {
        color: 'white',
        fontSize: '90px',
      },
      // '@media (min-width: 500px)': {
      //   color: 'black',
      //   fontSize: '50px',
      // },
      '@media (min-width: 700px)': {
        color: 'white',
        fontSize: '90px',
      },
    },
    text: {
      '@media (min-width: 500px)': {
        color: 'white',
        fontSize: '40px',
        width: '80vw',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '60px'
      },
      '@media (min-width: 510px) and (orientation: landscape)': {
        color: 'white',
        fontSize: '24px',
        width: '80vw',
        lineHeight: '40px',
        display: 'inline-block',
        // marginTop: '20px',
      },
      '@media (min-width: 1000px)': {
        color: 'white',
        fontSize: '20px',
        width: '55vw',
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: '34px',
        marginTop: '10px',
      },
    },
    footer: {
      '@media (min-width: 320px) and (orientation: portrait)': {
        background: '#111111',
        width: '100vw',
        height: '50vh',
        textAlign: 'center',
        fontWeight: 100,
        // fontSize: '35px',
        // lineHeight: '70px',
        // padding: '30px',
        color: 'gray',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      '@media (min-width: 500px) and (orientation: landscape)': {
        background: '#111111',
        width: '100vw',
        height: '70vh',
        textAlign: 'center',
        fontWeight: 100,
        // fontSize: '35px',
        // lineHeight: '70px',
        // padding: '30px',
        color: 'gray',
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
      },
      '@media (min-width: 1000px) and (orientation: landscape)': {
        background: '#111111',
        width: '100vw',
        height: '60vh',
        textAlign: 'center',
        fontWeight: 100,
        fontSize: '19px',
        lineHeight: '35px',
        // padding: '0px 150px',
        color: 'gray',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
    },
    footLogo: {
      '@media (min-width: 800px)': {
        padding: '30px 0 20px 0',
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center'
      },
    },
    footerText: {
      '@media (min-width: 300px) and (orientation: portrait)': {
        display: 'inline-block',
        fontSize: '28px',
        lineHeight: '50px',
        width: '80vw',
        padding: '0 0 30px 0'
      },
      '@media (min-width: 500px) and (orientation: landscape)': {
        display: 'inline-block',
        width: '80vw',
        lineHeight: '50px'
      },
      // '@media (min-width: 400px) and (orientation: portrait)': {
      //   display: 'inline-block',
      //   width: '80vw',
      //   lineHeight: '50px',
      //   fontSize: '23px'
      // },
      // '@media (min-width: 701px) and (orientation: portrait)': {
      //   display: 'inline-block',
      //   width: '80vw',
      //   lineHeight: '50px',
      //   fontSize: '23px'
      // },
      '@media (min-width: 1000px) and (orientation: landscape)': {
        display: 'inline-block',
        width: '80vw',
        fontSize: '16px',
        lineHeight: '35px'
      }
    },
    footerTop: {
      '@media (min-width: 300px) and (orientation: portrait)': {
        // padding: '30px 0 20px 0',
        borderTop: '1px solid white',
        display: 'flex',
        flexDirection: 'column',
        width: '100vw',
        height: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: 'white',
        padding: '0 50px'
      },
    },
    footerBottom: {
      '@media (min-width: 300px) and (orientation: portrait)': {
        borderTop: '1px solid white',
        display: 'flex',
        width: '100vw',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 50px'
      },
      '@media (min-width: 800px) and (orientation: landscape)': {
        borderTop: '1px solid white',
        display: 'flex',
        width: '100vw',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 50px'
      },
    },
    footerRights: {
      '@media (min-width: 300px) and (orientation: portrait)': {
        fontSize: '30px'
      },
      '@media (min-width: 500) and (orientation: landscape)': {
        fontSize: '20px'
      },
    },
    socialIcons: {
      '@media (min-width: 300px)': {
        width: '25%',
        // height: '110px',
      },
      '@media (min-width: 500px) and (orientation: landscape)': {
        width: '60px',
        height: '60px',
      },
      '@media (min-width: 700px) and (orientation: portrait)': {
        width: '60px',
        height: '60px',
      },
      '@media (min-width: 1000px)': {
        width: '40px',
        height: '40px',
      },
    },
    iconContainer: {
      '@media (min-width: 300px)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
      },
      '@media (min-width: 500px) and (orientation: landscape)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
      },
      '@media (min-width: 700px) and (orientation: portrait)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '250px',
      },
      '@media (min-width: 1000px)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '150px',
      },
    },
    button: {
        '@media (min-width: 320px) and (orientation: portrait)': {
          height: '300px',
          display: 'flex',
          justifyContent: 'center'
      },
        '@media (min-width: 500px) and (orientation: landscape)': {
          height: '70px',
          display: 'flex',
          justifyContent: 'center'
        },
      },
      song: {
        '@media (min-width: 320px) and (orientation: portrait)': {
          fontSize: '60px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        },
        '@media (min-width: 500px) and (orientation: landscape)': {
          fontSize: '25px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        },
      },
}