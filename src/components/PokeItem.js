import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div 
            className='PokeEl'
            style=
                {{backgroundColor: `${this.props.color_1}`}}>
                <a 
                href={this.props.pokedex} 
                target="_blank" 
                rel="noreferrer">
                    <img 
                    src={this.props.url_image} 
                    alt={this.props.pokemon}/> 
                </a>
                <p>{this.props.pokemon}</p>   
                <p>type: {this.props.type_1}</p>   
                <p>special ability: {this.props.ability_1} lbs</p>
            </div>
        )
    }
}
