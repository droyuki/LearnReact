/**
 * Created by WeiChen on 2016/1/19.
 */
import React from 'react';

var ServiceOptions = React.createClass({
    render: function () {
        return (
                <option value={this.props.key}>
                    {this.props.data}
                </option>

        )
    }
})

module.exports = ServiceOptions;