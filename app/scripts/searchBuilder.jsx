/**
 * @jsx React.DOM
 */
var app = app || {};

(function () {
    'use strict';

    app.SearchBuilder = React.createClass({
        render: function() {
            return (
                <div className="jumbotron">
                    <form role="form">
                        <div id="ltdl-search-builder"></div>
                        <div className="pull-right">
                            <button type="submit" className="btn btn-default">Search <span className="glyphicon glyphicon-search"></span></button>
                        </div>
                    </form>
                </div>
            );
        }
    });
}());
