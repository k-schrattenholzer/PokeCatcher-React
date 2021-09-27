import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './components/PokeItem.js'

export default class PokeDetail extends Component {

    state = {
        pokemon: [],
    }

    componentDidMount = async() => {
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.PokemonId}`);

            this.setState({
                pokemonData: response.body,
            })
            console.log(response)
    }

    
    render() {

        return (
            <div>
                <h3>This is the detail page for pokemon ID: {this.props.match.params.PokemonId}</h3>
                {
                    this.state.pokemon
                    .map( pokebaby => 

                        <PokeItem {...pokebaby} 
                        key={pokebaby._id} />)
                }
            </div>
        )
    }
}

