/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import ListApp from './reducer'
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import ReduxApp from './components/App'

let store = createStore(ListApp)
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ReduxApp/>
            </Provider>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("app"))