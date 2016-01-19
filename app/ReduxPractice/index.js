/**
 * Created by WeiChen on 2016/1/19.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './components/App'
import { createStore } from 'redux'
import todoApp from './reducers/reducer'

let store = createStore(todoApp)
export default class TodoApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

ReactDOM.render(<TodoApp/>,document.getElementById("app"))