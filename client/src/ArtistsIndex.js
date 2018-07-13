import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';

class ArtistsIndex extends Component {
    state = {
        artists: []
    }

    componentDidMount() {
        this.fetchArtists()
    }

    fetchArtists = () => {
        axios.get('/api/artists')
        .then((response)=>{
            console.log('ARTISTS DATA', response.data)
            this.setState({artists: response.data})
        })
        .catch((err)=> {
            console.log(err)
        })
    }
    render() {
        const artistsList = this.state.artists.map((artists, i)=> {
            return (
                <div key={i}>
                    <br/>
                    <Link to={`/artists/${artists.id}`}>{artists.name}</Link>
                </div>
            )
        })
        return (
            <div>
                <br/>
                {artistsList}
            </div>
        );
    }
}

export default ArtistsIndex;