Router.configure({
	layoutTemplate: 'layout',
	// waitOn: function() { return [Meteor.subscribe('read')]}, 


});

Router.route('/', {
	template: 'read',
	// template: 'reading', 
	// waitOn: function() { return [Meteor.subscribe('notifications')]}
	data: function() {
		return { 
			read: Read.find({userId: Meteor.userId()})
		};
	}

}); 

Router.route('/read', {
	name: 'read', 
	template: 'read', 
	waitOn: function() { return [Meteor.subscribe('read')]},
	data: function() {
		return { 
			read: Read.find({userId: Meteor.userId()})
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

Router.route('/reading', {
	name: 'reading',
	waitOn: function() { return [Meteor.subscribe('reading')]},

	template: 'reading', 
	data: function() {
		return { 
			reading: Reading.find({userId: Meteor.userId()})
		};
	}
}); 

Router.route('/addreading', {
	name: 'addReading', 
	template: 'addReading',
	data: function() {
		console.log('hai world'); 
	}
});