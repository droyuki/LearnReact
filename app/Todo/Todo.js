/**
 * Created by WeiChen on 2016/1/17.
 */
import React from 'react';
import TodoBanner from './TodoBanner';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
var Todo = React.createClass({
    getInitialState: function () {
        return {items: ["TestItem","TestItem 2"]};
    },
    updateItems: function (newItem) {
        var allItems = this.state.items.concat([newItem]);
        this.setState({items: allItems});
    },
    render: function () {
        return (
            <div>
                <TodoBanner/>
                <TodoList items={this.state.items}/>
                <TodoForm onFormSubmit={this.updateItems}/>
            </div>

        )
    }

})

module.exports = Todo;