Reading = new Mongo.Collection('reading');


Meteor.methods({
	readingInsert: function(readingAttributes) {
		check(this.userId, String); 
		check(readingAttributes, {
			title: String,
			author: String,
			genre: String,
			pages: Match.Integer, 
			start: String, 
		}); 

		var user = Meteor.user(); 
		var reading = _.extend(readingAttributes, {
			userId: user._id
		}); 

		Reading.insert(reading); 
		return 
	}
});