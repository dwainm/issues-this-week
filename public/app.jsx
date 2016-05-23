var firebaseConnection = new Firebase("https://wcbookings-1253.firebaseio.com/");

var IssuesApp = React.createClass({
	  render: function() {
		return <div>Hello {this.props.name}</div>;
	  }
});

ReactDOM.render( 
	<IssuesApp name="issuesApp" />, 
	document.getElementById("issuesApp")
);