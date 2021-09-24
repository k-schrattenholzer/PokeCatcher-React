import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className='PokeEl' >
                <h2>{this.props.pokemon}</h2>
                <a 
                href={this.props.pokedex} 
                target="_blank" 
                rel="noreferrer">
                    <img 
                    src={this.props.url_image} 
                    alt={this.props.pokemon}
                    // style={
                    //     {border: `5px solid ${this.props.color_1}`}}
                        /> 
                </a>
                 
                <div className='Stats'
                style={
                    {backgroundColor: `${this.props.color_1}`,
                    margin: '10px'
                    }}>
                    <p>type:{this.props.type_1}</p>
                    <p>special ability:{this.props.ability_1}</p> 
                </div>
            </div>
        )
    }
}
