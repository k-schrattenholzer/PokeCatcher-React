import React, { Component } from 'react'
import SearchSort from './SearchSort.js'



export default class GalleryHeader extends Component {
    render() {
        return (
            <div className = 'SearchContainer'>

                    <SearchSort
                    handleSearch={this.props.handleSearch}
                    handleChange={this.props.handleChange}
                    handleSortOrder={this.props.handleSortOrder}
                    handleSortBy={this.props.handleSortBy}
                    handleReset={this.props.handleReset} />
        </div>


        )
    }
}
