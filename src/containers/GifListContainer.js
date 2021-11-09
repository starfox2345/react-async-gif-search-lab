import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


const query = 'dog'

class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    render() {
        return(
            <div>
                <GifSearch fetchGIFs={this.fetchGIFs} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }


    fetchGIFs = (query = "dog") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(r=>r.json())
        .then(({data}) => {
            this.setState({ gifs: data.map(gif => ({ url: gif.images.original.url}))})
        })
    }

    componentDidMount(){
        this.fetchGIFs()
    }

}

export default GifListContainer