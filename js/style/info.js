
export default {
    container: {
      '@media (min-width: 320px)': {
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
      '@media (min-width: 320px)': {
        color: 'white',
        fontSize: '40px',
        width: '100vw',
        height: '90vh',
      },
      '@media (min-width: 500px)': {
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
      '@media (min-width: 800px)': {
        background: '#111111',
        width: '100vw',
        height: '55vh',
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
      '@media (min-width: 500px)': {
        display: 'inline-block',
        fontSize: '35px',
        lineHeight: '60px',
        width: '80vw',
      },
      '@media (min-width: 800px)': {
        display: 'inline-block',
        width: '80vw',
        lineHeight: '60px',
      },
      '@media (min-width: 900px)': {
        display: 'inline-block',
        width: '80vw',
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
    footerBottom: {
      '@media (min-width: 500px)': {
        // padding: '30px 0 20px 0',
        borderTop: '1px solid white',
        display: 'flex',
        width: '100vw',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: 'white',
        padding: '0 50px'
      },
      '@media (min-width: 800px)': {
        // padding: '30px 0 20px 0',
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
    socialIcons: {
      '@media (min-width: 500px)': {
        // padding: '30px 0 20px 0',
        // borderTop: '1px solid white',
        // display: 'flex',
        // width: '100vw',
        // height: '20%',
        // alignItems: 'center',
        // justifyContent: 'space-between',
        // color: 'white',
        // padding: '0 50px'
      },
      '@media (min-width: 800px)': {
        width: '80px',
        height: '80px',
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
        width: '350px',
      },
      //   '@media (min-width: 800px)': {
      //   display: 'flex',
      //   justifyContent: 'space-between',
      //   width: '350px',
      // },
      '@media (min-width: 800px)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '300px',
      },
      '@media (min-width: 1000px)': {
        display: 'flex',
        justifyContent: 'space-between',
        width: '150px',
      },
    }
}