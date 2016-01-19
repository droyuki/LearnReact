/**
 * Created by WeiChen on 2016/1/19.
 */
import React from 'react';
import ServiceOptions from './ServiceOptions';

var TestView = React.createClass({
    render: function () {
        var createOption = function (item) {
            return (
                <ServiceOptions>
                    {item}
                </ServiceOptions>
            );

        };
        return (
            <div>
                view
            </div>
        )
    }
})

module.exports = TestView