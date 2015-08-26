Meteor.publish('read', function() {
	return Read.find({userId: this.userId}); 
}); 


Meteor.publish('reading', function() {
	return Reading.find({userId: this.userId}); 
}); 



Meteor.publish('willread', function() {
	return WillRead.find({userId: this.userId}); 
}); 
