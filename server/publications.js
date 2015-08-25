Meteor.publish('read', function() {
	return Read.find({}); 
}); 