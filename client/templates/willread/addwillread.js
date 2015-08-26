Template.addWillRead.rendered=function() {
    $('#start-datepicker').datepicker();
    $('#end-datepicker').datepicker();
}

Template.addWillRead.events({
	'submit form': function(e) {
		e.preventDefault(); 

		var willread = {
			author: $(e.target).find('[name=author]').val(),
			title: $(e.target).find('[name=title]').val(),
			genre: $(e.target).find('[name=genre]').val(),
			pages: parseInt($(e.target).find('[name=pages]').val()),

		}; 

		Meteor.call('willReadInsert', willread, function(error) { 
			if (error) 
				return throwError(error.reason); 
			
			Router.go('/willread'); 
		});	
	}
});