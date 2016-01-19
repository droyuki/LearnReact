/**
 * Created by WeiChen on 2016/1/17.
 */
import React from 'react';
import TodoListItem from './TodoListItem';

var TodoList = React.createClass({

    render: function () {
        var createItem = function (itemText) {
            return ( <TodoListItem>{itemText}</TodoListItem> );
        };

        return (
            <div>
                <ul>{this.props.items.map(createItem)}</ul>
            </div>
        )
    }
})

module.exports = TodoList;