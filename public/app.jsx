var firebaseConnection = new Firebase("https://wcbookings-1253.firebaseio.com/");

var IssuesApp = React.createClass({

	handleSubmit: function( e ){
		
		console.log('submitted');
		
	},
	
	render: function() {
		return (<div>
				<form>
					<input type="text" />
					<input type="submit" onClick={this.handleSubmit} />
				</form>
			</div>);

	  }
});

ReactDOM.render( 
	<IssuesApp name="issuesApp" />, 
	document.getElementById("issuesApp")
);