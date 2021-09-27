import React, { Component } from 'react'

export default class PokeDetail extends Component {
    render() {
        console.log('POKE ID IS >>>', this.props.match.params.PokemonId)
        return (
            <div>
                This is the detail page
            </div>
        )
    }
}
