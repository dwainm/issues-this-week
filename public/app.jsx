
var IssuesApp = React.createClass({

	handleSubmit: function( e ){
		e.preventDefault();
		console.log('submitted');

		 var usernameInput = document.querySelector('#issue-input');
		 var issueList     = usernameInput.value.split('\n');
		 //usernameInput.value = '';	
		
		 this.storeIssues();
		
	},

	storeIssues: function( issueList ){
		
		issueList.forEach( function(issueUrl, index ){

			var today = new Date();
			var issue = { url: issueUrl, author: '', lables:'', created: today.toJSON  };
			//restDb.issuesRef(  )	

		});
		
	},
	
	render: function() {
		return (<div>
				<form>
					<textarea id="issue-input" />
					<input type="submit" onClick={this.handleSubmit} />
				</form>
			</div>);

	  }
});

ReactDOM.render( 
	<IssuesApp name="issuesApp" />, 
	document.getElementById("issuesApp")
);