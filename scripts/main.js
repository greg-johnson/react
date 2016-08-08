// Main React Functions 
var React = require('react');
var ReactDOM = require('react-dom');

// Import our Routers 
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
import { browserHistory } from 'react-router'

// Import Our Helpers File
var h = require('./helpers');

/*
  OrderHistory
  
  Our main class which contains all our other 
  classes too.
  	
*/
var OrderHistory = React.createClass({
	
	render : function(){
		return(
			<div>
        <h1>Order History</h1>
        <p>To view an order in greater detail or to see the status of items in an order simply click on the 'View Order' button for the appropriate order below.</p>
        <p>Please note that orders cancelled or declined will not be processed. For more information contact customer service via email at <a href="mailto:no-reply@boohoo.com">boohoo</a></p>
			</div>
		)
	}
	
});


/*
  Order Page
  
  Our main app class which contains all our other 
  classes too.
  	
*/
var Order = React.createClass({
	
	render : function(){
		return(
			<div>
				<p>The order</p>
			</div>
		)
	}
	
});


/*
  Not Found
 
*/
var NotFound = React.createClass({
	
	render : function(){
		return(
			<div>
				<h1>Not Found</h1>
			</div>
		)
	}
	
});







/*
	Routes
	
*/
var routes = (
	<Router history={browserHistory}>
		<Route path='/' component={OrderHistory} />
		<Route path='/order/:orderId' component={Order} />
		<Route path='*' component={NotFound} />
	</Router>
);

ReactDOM.render(routes, document.getElementById('orderhistory'));