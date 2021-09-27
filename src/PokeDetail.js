import React, { Component } from 'react'
import request from 'superagent'
import PokeItem from './components/PokeItem.js'

export default class PokeDetail extends Component {

    state = {
        pokemon: [],
    }

    componentDidMount = async() => {
            const response = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.pokemonId}`);

            await this.setState({
                pokemon: response.body}
                )
                console.log(response.body)
    }
    
    render() {

        return (
            <div>
                <h3>This is the detail page for pokemon ID: {this.state.pokemon._id}</h3>

                        <PokeItem
                        {...this.state.pokemon} />
            </div>
        )
    }
}

