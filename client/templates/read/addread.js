Template.addRead.rendered=function() {
    $('#start-datepicker').datepicker();
    $('#end-datepicker').datepicker();
}

Template.addRead.events({
	'submit form': function(e) {
		e.preventDefault(); 

		var read = {
			author: $(e.target).find('[name=author]').val(),
			title: $(e.target).find('[name=title]').val(),
			genre: $(e.target).find('[name=genre]').val(),
			pages: parseInt($(e.target).find('[name=pages]').val()),
			start: $(e.target).find('[name=start]').val(),
			end: $(e.target).find('[name=end]').val(),
		}; 


		Meteor.call('readInsert', read, function(error) { 
			if (error) 
				return throwError(error.reason); 

			Router.go('/'); 
		});	
	}
});