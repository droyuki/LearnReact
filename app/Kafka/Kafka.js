import React from 'react';
import Form from './Form';
import TestView from './TestView';
var Kafka = React.createClass({
    getInitialState: function () {
        return {
            items: ["Service 1", "Service 2"],
            selected: {}
        };
    },
    sendItems: function (newItem) {
        this.setState({selected: newItem});
    },
    render: function () {

        return (
            <div>
                <TestView />
                <Form items={this.state.items} onFormSubmit={this.sendItems}/>
            </div>
        )

    }

})

module.exports = Kafka;