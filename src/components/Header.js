import React, { Component } from 'react'
import SearchSort from './SearchSort.js'

export default class Header extends Component {
    render() {
        return (
            <div className="HContainer">

                <h1>POKEDEX</h1>

                <SearchSort 
                handleSearch={this.props.handleSearch}
                handleChange={this.props.handleChange}
                handleSortOrder={this.props.handleSortOrder}
                handleSortType={this.props.handleSortType}/>

            </div>
        )
    }
}
