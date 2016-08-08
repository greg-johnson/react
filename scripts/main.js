// Main React Functions 
var React = require('react');
var ReactDOM = require('react-dom');

// Import our Routers 
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var History = ReactRouter.History;
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
  All Orders Page
  	
*/
var Orders = React.createClass({
	mixins : [History],
	getOrderDetails : function(evt){
		evt.preventDefault();
		var orderId = this.refs.orderButton.dataset.ordernum;
		this.history.pushState(null, '/order/' + orderId);
	},
	render : function(){
		return(
			<div>
				<p>This should be a list of orders <a data-ordernum='2' ref="orderButton" onClick={this.getOrderDetails}>Get Order</a></p>
			</div>
		)
	}
	
});



/*
  Order Page
  
*/
var Order = React.createClass({
	render : function(){
		return(
			<div>
				<p>This is order: Who knows</p>
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
		<Route path='/order' component={Orders} />
		<Route path='/order/:orderId' component={Order} />
		<Route path='*' component={NotFound} />
	</Router>
);

ReactDOM.render(routes, document.getElementById('orderhistory'));