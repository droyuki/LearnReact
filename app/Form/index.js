/**
 * Created by WeiChen on 2016/1/20.
 */
import React from 'react'
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import SimpleForm from './SimpleForm'
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
const reducers = {
    // ... your other reducers here ...
    form: formReducer     // <---- Mounted at 'form'. See note below.
}
const reducer = combineReducers(reducers);
const store = createStore(reducer);

export default class Form extends React.Component {
    handleSubmit(data){
        //TODO: sent JSON to kafka
        console.log("submit"+ JSON.stringify(data, undefined, 2))
        alert(JSON.stringify(data, undefined, 2))
    }

    render() {
        return (
            <Provider store={store}>
                <SimpleForm onSubmit={this.handleSubmit.bind(this)}/>
            </Provider>
        )
    }
}

ReactDOM.render(<Form/>,document.getElementById("app"))