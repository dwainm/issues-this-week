var IssuesApp = React.createClass({

	handleSubmit: function( e ){
		e.preventDefault();
		var usernameInput = document.querySelector('#issue-input');
		var issueListCsv  = usernameInput.value.split('\n').join(',');
		
		qwest.post('/',  {issuesCsv: issueListCsv })
     	.then(function(xhr, response) {
        	// Make some useful actions
     	}) 
     	.catch(function(e, xhr, response) {
        // Process the error
     	});
	},
	
	render: function() {
		return (<div>
				<form action="/" method="POST">
					<textarea name="issues" id="issue-input" />
					<input type="submit" onClick={this.handleSubmit} />
				</form>
			</div>);

	  }
});

ReactDOM.render( 
	<IssuesApp name="issuesApp" />, 
	document.getElementById("issuesApp")
);