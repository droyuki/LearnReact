/**
 * Created by WeiChen on 2016/1/17.
 */
import React from 'react';

var TodoListItem = React.createClass({
    render: function () {
        return (
            <li>{this.props.children}</li>
        )
    }
})

module.exports = TodoListItem;