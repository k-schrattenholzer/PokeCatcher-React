import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='PokeEl' >
                <h2>{this.props.pokemon}</h2>
                <Link to={`/Pokedex/${this.props._id}`}>
                    <img 
                    src={this.props.url_image} 
                    alt={this.props.pokemon}/> 
                </Link>
                 
                <div className='Stats'
                style={
                    {backgroundColor: `${this.props.color_1}`,
                    margin: '10px'
                    }}>
                    <p
                    className='StatEl'>type:{this.props.type_1}</p>
                    <p
                    className='StatEl'>special ability:{this.props.ability_1}</p> 
                </div>
            </div>
        )
    }
}
