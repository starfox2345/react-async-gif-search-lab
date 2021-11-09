import React from 'react'

import NavBar from './NavBar'

// https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g
// images.original.url
// the App component should render out the GifListContainer component 
import GifListContainer from '../containers/GifListContainer'

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer/>
    </div>
  )
}

export default App
