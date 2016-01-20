/**
 * Created by WeiChen on 2016/1/20.
 */
import React ,{PropTypes}from 'react'
import { connect } from 'react-redux'
import {add} from '../actions'
import Add from './Add'
import View from './View'
export default class ReduxApp extends React.Component {
    render() {
        const {dispatch, items} = this.props
        return (
            <div>
                <Add onAddClick={text =>dispatch(add(text)) } items={this.props.items}/>
                <View items={items}/>
            </div>
        )
    }
}

ReduxApp.propTypes = {
    items: PropTypes.arrayOf(
                PropTypes.shape(
                    {text: PropTypes.string.isRequired}
                ).isRequired
            ).isRequired
}

function selector(state) {
    return state
}
export default connect(selector)(ReduxApp)