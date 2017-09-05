var React = require('react');

var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
    render: function () {
        return(
            <div>
                <Header />
                 <h1 className="maintitle">New York Times Article Scrubber</h1>
                <div className="main-content">
                    {this.props.children}
                </div>
                
            </div>

        )
    }
});

module.exports = Main;