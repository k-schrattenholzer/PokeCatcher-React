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

                <SortDropDown
                options={[
                    'asc',
                    'desc'
                ]}
                optionValue='Sort'
                handleSortOrder={this.props.handleSortOrder}
                />

                <SortDropDown
                options={[

                ]}
                optionValue='Filter By'
                handleSortOrder={this.props.handleSortOrder}
                />
            </div>
        )
    }
}
