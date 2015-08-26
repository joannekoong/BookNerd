Meteor.publish('read', function() {
	return Read.find({userId: this.userId}); 
}); 


Meteor.publish('reading', function() {
	return Reading.find({userId: this.userId}); 
}); 

