import React from 'react'
import request from 'superagent'
import Header from './components/Header.js'
import PokeList from './components/PokeList.js'

export default class PokeGallery extends React.Component {

    state = {

        pokemonData: [],
        searchParam: ''
        }

    componentDidMount = async () => {

        const response = await request.get('https://pokedex-alchemy.herokuapp.com/api/pokedex');

        this.setState({searchParam: response.body})

    }
    
    handleSelectKeyword = (e) => {
          this.setState({pokemonData: e.target.value})
        }

    render() {
        console.log(this.state.searchParam)
        return (
            <div>
                <Header
                handleSelectKeyword = {this.handleSelectKeyword}
                />
                <PokeList
                pokemonData = {this.state.pokemonData}
                />
            </div>
        )
    }
}
