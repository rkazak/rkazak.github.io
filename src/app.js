var div = React.DOM.div
var h1 = React.DOM.h1
var MyTitle = require('./MyTitle')

// now use the class previously created.
var myFirstComp = (
   React.createElement(MyTitle,null)
)

//
ReactDOM.render(
  myFirstComp,
  document.getElementById('example')
)
