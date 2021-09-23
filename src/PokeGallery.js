import React from 'react'
import request from 'superagent'
import Header from './components/Header.js'
import PokeList from './components/PokeList.js'

export default class PokeGallery extends React.Component {

    state = {

        pokemonData: [],
        searchParam: '',
        areWeLoading: false,

        }

    componentDidMount = async () => {
        this.fetchUserSearch();
    }
    
    handleChange = (e) => {
        e.preventDefault();
        this.setState({searchParam: e.target.value});
        console.log(this.state.searchParam)
    }

    handleSearch = (e) => {
        e.preventDefault();
        this.fetchUserSearch();
    }

    fetchUserSearch = async () => {

        try {
            this.setState({ areWeLoading: true })

            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.searchParam}`);

            this.setState({
                pokemonData: response.body.results,
                areWeLoading: false
            })

        } catch(e) {
                this.setState({ isLoading: false });
        }
    }

    render() {
        
        return (
            <div>
                <Header
                handleSearch = {this.handleSearch}
                handleChange = {this.handleChange}
                />
                <PokeList
                pokemonData = {this.state.pokemonData}
                />
            </div>
        )
    }
}
