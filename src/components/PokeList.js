import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
            <div>
              <img src={this.props.url_image} alt={this.props.pokemon}/> 
                <p>{this.props.pokemon}</p>   
                <p>height: {this.props.height} cm</p>   
                <p>weight: {this.props.weight} lbs</p>   
            </div>
        )
    }
}
