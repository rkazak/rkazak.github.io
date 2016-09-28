var div = React.DOM.div
var h1  = React.DOM.h1

// class creates a blueprint.
//
var MyTitle = React.createClass({
// es6 syntax - or render: function() {}
    render() {
        return (
        div(null,
           h1(null, 'Check out this Component!')))
    }
})

module.exports = MyTitle