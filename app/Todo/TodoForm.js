/**
 * Created by WeiChen on 2016/1/17.
 */
import React from 'react';

var TodoForm = React.createClass({
    getInitialState: function () {
        return {item: ''};
    },
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state.item);
        this.setState({item: ''});
        React.findDOMNode(this.refs.item).focus();
        return;
    },
    onChange: function (e) {
        this.setState({item: e.target.value});
    },
    render: function () {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' ref='item' onChange={this.onChange} value={this.state.item}/>
                <input type='submit' value='Add'/>
            </form>
        )
    }
})

module.exports = TodoForm;