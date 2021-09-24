import React, { Component } from 'react'

export default class SortDropDown extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleSortOrder}
                 >
                    <option value=''>{this.props.optionValue}</option>
                   {
                    this.props.options.map(
                    entry => <option
                        key = {entry}
                        value = {entry}>
                            {entry}
                            </option>)
                   }
                </select>
            </div>
        )
    }
}
