/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'

export default class List extends React.Component{
    render(){
        return(
            <li>{this.props.text}</li>
        )
    }
}