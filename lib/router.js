Router.configure({
	layoutTemplate: 'layout',
	waitOn: function() { return [Meteor.subscribe('read')]}, 

});

Router.route('/', {
	template: 'read',
	// waitOn: function() { return [Meteor.subscribe('notifications')]}
	data: function() {
		return { 
			read: Read.find({})
		};
	}
}); 


Router.route('/addread', {
	name: 'addRead', 
	template: 'addRead',
	data: function() {
		console.log('hai world'); 
	}
});