import React, { Component } from 'react'

export default class SearchSort extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <input onChange={this.props.handleChange}/>
                    <button>Search</button>
                </form>
            </div>
        )
    }
}
