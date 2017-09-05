var React = require('react');

var Header = React.createClass({
    render: function() {
        return(
            <div className="page-header" role="navigation">
                <div className="container">
                    <div className="col col-md-8 title">
                        <h4><a href="/">Home</a></h4>
            
                    </div>
                    
                    <div>
                  <h4 className="searchlink"><a href="#/search">Search</a></h4>
                   <h4 className="savedlink"><a href="#/saved">Saved </a></h4>
                   </div>
                        
                    
                </div>
            </div>
        );
    }
});

module.exports = Header;
