'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Provider from 'redux';
import TestOne from './TestOne';
import TestTwo from './TestTwo';
import HeaderView from './view/HeaderView';
import TodoApp from './ReduxPractice/index'
var Main = React.createClass({
    getInitialState: function () {
        return {
            switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
        return (
            <div>
                <HeaderView />
                <input type="button" onClick={this._toggle} value="Press Me!"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
                <TodoApp />
            </div>
        );
    }
});

ReactDOM.render(<Main />, document.getElementById("app"));