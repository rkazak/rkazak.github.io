var div = React.DOM.div
var h1 = React.DOM.h1
            
var myFirstComp = (
   div(null, 
   h1(null, "This is my first component!")))
            
   ReactDOM.render(
      myFirstComp,
      document.getElementById('example')
);
