Meteor.publish('read', function() {
	return Read.find({userId: this.userId}); 
}); 