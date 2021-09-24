import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        return (
            <div className='PokeDiv'>
                {

                this.props.pokemonData
                .map( pokebaby => 

                    <PokeItem {...pokebaby} 
                    key={pokebaby._id} />)
                }
            </div>
        )
    }
}
