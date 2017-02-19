require('babel-register')

// const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const ServerRouter = ReactRouter.ServerRouter
const _ = require('lodash')
const fs = require('fs')
const co = require('co')
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/App').default
const Helmet = require('react-helmet')

const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const request = require('request');
const cheerio = require('cheerio');



app.use('/public', express.static('./public'))

app.use(function(req, res, next) {
  global.navigator = {
    userAgent: req.headers['user-agent']
  }
  next()
})

app.use((req, res) => {
  co(function* () {
    const song = yield requestCurrentSong()

    const context = ReactRouter.createServerRenderContext()
    const body = ReactDOMServer.renderToString(
      React.createElement(ServerRouter, { location: req.url, context: context, radiumConfig: { userAgent: req.headers['user-agent'] }, loh: 'ya' },
        // React.createElement(App)
        React.createElement(
          App,
          { radiumConfig: { userAgent: req.headers['user-agent']
          },
          song,
        })
      )
    )

  let head = Helmet.rewind()

  const initialState = { fuck: 'success' }


  const html = `<!DOCTYPE html><html lang="en">
  <head><meta charset="UTF-8">${head.title.toString()}${head.meta.toString()}${head.link.toString()}<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&amp;subset=cyrillic-ext" rel="stylesheet"><link rel="stylesheet" href="/public/normalize.css">
  <meta property="og:url" content="http://suburbrussia.com">
  <link rel="shortcut icon" href="/public/img/favicon.png">
  <link rel="stylesheet" href="/public/style1.css"></head><body><div id="app">${body}</div>
  <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
  <script src="/public/bundle24.js"></script></body></html>`

    // res.write(template({ body: body }))
    res.write(html)
    res.end()
  })
})




function checkDiff(song) {
  let currentSong = song;
  return function(newSong) {
    if (currentSong !== newSong) {
      currentSong = newSong
      return currentSong
    }
    return false
  }
}

function emitData(data, socket) {
  socket.emit('news', { hello: data })
}

function requestCurrentSong() {
  return new Promise(function(resolve) {
    request('http://46.32.69.199:8000/', (error, response, html) => {
      if (!error) {
        var $ = cheerio.load(html, { decodeEntities: false })
        resolve($('td').eq(19).html())
      }
    })
  })
}

const emitter = co.wrap(function* (socket, diffCheck) {
  const data = yield requestCurrentSong()
  const newSong = diffCheck(data)
  if (newSong) emitData(data, socket)
})

io.on('connection', function (socket) {
  const diffCheck = checkDiff()
  emitter(socket, diffCheck)
  setInterval(() => emitter(socket, diffCheck), 3000)
})



const port = process.env.PORT || 5050
server.listen(port, () => console.log(`App listening on port ${port}!`))
