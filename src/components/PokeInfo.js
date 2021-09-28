import React, { Component } from 'react'


export default class PokeInfo extends Component {
    render() {
        return (
        <div className='PokeEl' >
            <div className='Stats'
                style={
                    {backgroundColor: `${this.props.color_2}`,
                    margin: '10px'
                    }}>

                        <span className='StatEl Name'>{this.props.pokemon}</span>
                        <span className='StatEl'>
                            species-id: {this.props.species_id}</span>
                        <span className='StatEl'>
                            type: {this.props.type_1} and {this.props.type_2}</span>
                        <span className='StatEl'>
                            attack: {this.props.attack}
                            <br/>
                            s. attack: {this.props.special_attack}
                        </span>
                        <span className='StatEl'>
                            defense: {this.props.defense}
                            <br/>
                            s. defense: {this.props.special_defense}
                        </span>
                        <span className='StatEl'>
                            secret ability:{this.props.ability_hidden}</span>
                        <span
                        className='StatEl'>
                            egg group: {this.props.egg_group_1} and {this.props.egg_group_2}</span>
                        <p
                        className='StatEl'>
                            type:{this.props.type_1}</p>
                        <p
                        className='StatEl'>
                            special ability:{this.props.ability_1}</p> 
                </div>
            </div>
        )
    }
}