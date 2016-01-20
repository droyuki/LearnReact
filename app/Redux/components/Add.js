/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import View from './View'
export default class Add extends React.Component {
    handleClick(e){
        //point to ref='input'
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onAddClick(text)
        node.value = ''
        console.log("handleClick()")
    }
    render() {
        return (
            <div>
                <input type='text' ref='input'/>
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        )
    }
}
//Add.propTypes = {
//    onAddClick: PropTypes.func.isRequired
//}

