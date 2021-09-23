import React, { Component } from 'react'
import SearchSort from './SearchSort.js'
import Title from './Title.js'

export default class Header extends Component {
    render() {
        return (
            <div>
                <Title />
                <SearchSort 
                handleSearch={this.props.handleSearch}
                />
            </div>
        )
    }
}
