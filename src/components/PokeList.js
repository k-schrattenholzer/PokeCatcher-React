import React, { Component } from 'react'
import PokeItem from './PokeItem.js'

export default class PokeList extends Component {
    render() {
        return (
            <div className='PokeEl'>
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
