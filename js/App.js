import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Player from './Player'
import Search from './Search'
import Info from './Info'
import Details from './Details'
import preload from '../public/data.json'
import Radium, { StyleRoot } from 'radium'
import Helmet from "react-helmet"



const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Match exactly pattern='/' component={(props) => {
          return (
            <StyleRoot>
              <Player {...props} />
            </StyleRoot>
          )
        }}
        />
        <Match
          pattern='/info'
          component={(props) => {
            return (
              <StyleRoot>
                <Info />
              </StyleRoot>
            )
          }
        }
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
            return <Details show={shows[0]} {...props} />
          }}
        />
      </div>
    </Provider>
  )
}

export default App
