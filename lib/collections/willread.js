WillRead = new Mongo.Collection('willread');


Meteor.methods({
	willReadInsert: function(willreadAttributes) {
		check(this.userId, String); 
		check(willreadAttributes, {
			title: String,
			author: String,
			genre: String,
			pages: Match.Integer, 
		}); 

		var user = Meteor.user(); 
		var willread = _.extend(willreadAttributes, {
			userId: user._id
		}); 

		WillRead.insert(willread); 
		return 
	}
});