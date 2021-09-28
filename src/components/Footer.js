import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="Pagination">
                
                
                {
                    this.props.currentPage !== 1 && <button onClick={this.props.handlePrevPage}>Prev</button>
                }
                <span>page {this.props.currentPage}</span>
                {
                    this.props.currentPage < 20 && <button onClick={this.props.handleNextPage}>Next</button>
                }
            </div>
        )
    }
}
