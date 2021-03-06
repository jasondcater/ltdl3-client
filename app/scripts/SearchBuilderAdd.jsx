/**
 * @jsx React.DOM
 */
var React = require('react');

(function () {
    'use strict';

    module.exports = React.createClass({
        getInitialState: function () {
            return {
                isAdd: true,
                label: "AND"
            }
        },
        add: function (event) {
            this.setState({label: event.target.getAttribute("data-label")});

            if (this.state.isAdd) {
                this.setState({isAdd: false});
                this.props.add(this.props.index);
            }
            this.props.queryBuilder.setQueryExpression(this.props.index, {glueTypeNextTerm: this.props.queryBuilder.enumGlueTypes[event.target.getAttribute("data-value")]});
        },
        setBool: function (event) {
            this.setState({label: event.target.getAttribute("data-label")});
            this.add(event);
        },
        remove: function (event) {
            this.props.queryBuilder.deleteQueryExpression(this.props.index);

            if (! this.state.isAdd) {
                this.props.remove(this.props.index);
            }
        },
        render: function () {
            var revisePulldownStyle = {display: "inherit"};
            var toggleClass = "";
            if (this.state.isAdd) {
                toggleClass = "dropdown-toggle";
            }
            return (
                <div className="input-group row-bool-group">
                    <div className="input-group-btn left-bool-group">
                        <button style={revisePulldownStyle} type="button" className="btn btn-default dropdown-toggle bool-button" id="bool-dropdown-left" data-toggle="dropdown">
                            {this.state.label} <span className="caret"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right bool-menu-left" role="menu" aria-labelledby="bool-dropdown-left">
                            <li><a data-label="AND" data-value="and" onClick={this.setBool} href="#">AND</a></li>
                            <li><a data-label="OR" data-value="or" onClick={this.setBool} href="#">OR</a></li>
                            <li><a data-label="NOT" data-value="not" onClick={this.setBool} href="#">NOT</a></li>
                        </ul>
                    </div>

                    <div className="input-group-btn right-bool-group">
                        <button type="button" onClick={this.remove} className="tip btn btn-default {toggleClass} add-del-button" id="bool-dropdown-right" data-toggle="dropdown" title="Click and choose a selector to add a new row">
                            <span className={"glyphicon glyphicon-" + (this.state.isAdd ? "plus" : "minus") + " white-icon"} data-label="AND" data-value="and"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-right bool-menu-right" role="menu" aria-labelledby="bool-dropdown-right">
                            <li><a data-label="AND" data-value="and" onClick={this.setBool} href="#">AND</a></li>
                            <li><a data-label="OR" data-value="or" onClick={this.setBool} href="#">OR</a></li>
                            <li><a data-label="NOT" data-value="not" onClick={this.setBool} href="#">NOT</a></li>
                        </ul>
                    </div>
                </div>
            )
        }
    });
}());