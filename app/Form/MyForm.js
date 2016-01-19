/**
 * Created by WeiChen on 2016/1/19.
 */
import React from 'react';
var MyForm = React.createClass({

    getInitialState: function () {
        return {
            firstName: 'hello world'
        };
    },

    render: function () {
        return (
            <div className="MyForm">
                <div>{this.props.firstName}</div>
                <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
            </div>
        );
    }
});
module.exports = MyForm;