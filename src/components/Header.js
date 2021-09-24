import React, { Component } from 'react'
import SearchSort from './SearchSort.js'
import Title from './Title.js'

export default class Header extends Component {
    render() {
        return (
            <div className="HContainer">
                <Title />
                <SearchSort 
                handleSearch={this.props.handleSearch}
                handleChange={this.props.handleChange}
                handleSortOrder={this.props.handleSortOrder}
                handleSortType={this.props.handleSortType}/>
            </div>
        )
    }
}
