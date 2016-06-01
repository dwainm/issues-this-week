
var IssuesApp = React.createClass({

	handleSubmit: function( e ){
		return true;
		e.preventDefault();
		console.log('submitted');

		 var usernameInput = document.querySelector('#issue-input');
		 var issueList     = usernameInput.value.split('\n');
		 //usernameInput.value = '';	
		
		 this.storeIssues( issueList );
		
	},

	storeIssues: function( issueList ){
		
		var issues = [];
		issueList.forEach( function(issueUrl, index ){

			var today = new Date();
			var issue = { url: issueUrl, author: '', lables:'', created: today.toJSON()  };
			issues.push(issue);	

		});

		var myHeaders = new Headers();
		var myInit = { method: 'POST',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default',
               body: new Blob( issues)
           };

		fetch('/issues',myInit)
		.then(function(response) {
			console.log(response);
  			return response.blob();
		});		
	},
	
	render: function() {
		return (<div>
				<form action="/issues" method="POST">
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