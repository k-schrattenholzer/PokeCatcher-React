import React, { Component } from 'react'
import SortDropDown from './SortDropDown.js'

export default class SearchSort extends Component {
    render() {
        return (
            <div className='SearchSort'>

                <form onSubmit={this.props.handleSearch}>

                    <input onChange={this.props.handleChange}/>
                    <button>Search</button>

                </form>
                <button
                className="ResetButton"
                onClick={this.props.handleReset}>
                    reset
                </button>
                <div className="Sort">
                <p>order</p>
                <SortDropDown
                    options={[
                        'asc',
                        'desc'
                        ]}
                    optionValue=''
                    handleSort={this.props.handleSortOrder}/>

                <p>by</p>
                <SortDropDown
                    options={[
                        'pokemon',
                        'type',
                        'shape',
                        'ability'
                        ]}
                    optionValue=''
                    handleSort={this.props.handleSortType} />
                </div>
            </div>
        )
    }
}
