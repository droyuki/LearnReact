/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import List from './List'
export default class View extends React.Component {
    render() {
        return (
            <div>
                <h2>Items</h2>
                <p>{JSON.stringify(this.props.items, undefined, 1)}</p>
                <ul>
                    {this.props.items.map((obj, index) =>
                        <List {...obj} key={index}/>
                    )}

                </ul>
            </div>
        )
    }
}