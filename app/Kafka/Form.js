/**
 * Created by WeiChen on 2016/1/19.
 */
import React from 'react';
import ServiceOptions from './ServiceOptions';
var Form = React.createClass({
    handleSubmit: function (e) {
        e.preventDefault();
        this.props.onFormSubmit(this.state)
        React.findDOMNode(this.refs.item).focus();
        return;
    },
    render: function () {
        var createOption = function (item) {
            return (
                <ServiceOptions key={item.index} data={item} />
            );

        };
        return (
            <form>
                <select>
                    {this.props.items.map(createOption)}
                </select>
                <input type="submit" value="Start"></input>
            </form>
        )
    }
})

module.exports = Form;