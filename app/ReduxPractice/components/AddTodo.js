import React, {Component, PropTypes} from 'react'

export default class AddTodo extends React.Component {
    render() {
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }

    handleClick(e){
        //point to ref='input'
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
}