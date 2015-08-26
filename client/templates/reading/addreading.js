Template.addReading.rendered=function() {
    $('#start-datepicker').datepicker();
    $('#end-datepicker').datepicker();
}

Template.addReading.events({
	'submit form': function(e) {
		e.preventDefault(); 

		var reading = {
			author: $(e.target).find('[name=author]').val(),
			title: $(e.target).find('[name=title]').val(),
			genre: $(e.target).find('[name=genre]').val(),
			pages: parseInt($(e.target).find('[name=pages]').val()),
			start: $(e.target).find('[name=start]').val(),
		}; 


		Meteor.call('readingInsert', reading, function(error) { 
			if (error) 
				return throwError(error.reason); 

			Router.go('/reading'); 
		});	
	}
});