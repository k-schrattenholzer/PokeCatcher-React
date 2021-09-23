import React from 'react'
import request from 'superagent'
import Header from './components/Header.js'
import PokeList from './components/PokeList.js'

export default class PokeGallery extends React.Component {

    state = {

        pokemonData: [],
        searchParam: '',
        loading: false,

        }

    componentDidMount = async () => {

        const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchParam}`);

        this.setState({pokemonData: response.body.results})

    }
    
    handleSearch = (e) => {

        e.preventDefault();

        this.setState({searchParam: e.target.value});

        }

    render() {
        console.log(this.state.pokemonData)
        return (
            <div>
                <Header
                handleSearch = {this.handleSearch}
                />
                <PokeList
                pokemonData = {this.state.pokemonData}
                />
            </div>
        )
    }
}
