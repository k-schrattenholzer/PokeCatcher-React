import React, { Component } from 'react'


export default class NavHeader extends Component {
    render() {
        return (
            <div>

                <h1>POKEDEX</h1>
                
                <button onClick={this.props.handlePrevPage}>Prev</button>
                <p>current page:{this.props.currentPage}</p>
                <button onClick={this.props.handleNextPage}>Next</button>
                

            </div>
        )
    }
}
