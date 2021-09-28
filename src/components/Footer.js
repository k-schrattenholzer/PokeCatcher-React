import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <p>current page:{this.props.currentPage}</p>
                
                {
                    this.props.currentPage !== 1 && <button onClick={this.props.handlePrevPage}>Prev</button>
                }
                {
                    this.props.currentPage < 20 && <button onClick={this.props.handleNextPage}>Next</button>
                }
            </div>
        )
    }
}
