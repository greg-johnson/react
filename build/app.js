

var HelloMessage = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      "Hello ",
      this.props.name
    );
  }
});

React.render(React.createElement(HelloMessage, { name: "John" }), document.getElementById('orderhistory'));