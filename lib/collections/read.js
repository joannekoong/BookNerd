Read = new Mongo.Collection('read');


Meteor.methods({
	readInsert: function(readAttributes) {
		console.log(readAttributes); 
		check(this.userId, String); 
		check(readAttributes, {
			title: String,
			author: String,
			genre: String,
			pages: Match.Integer, 
			start: String, 
			end: String
		}); 

		var user = Meteor.user(); 
		var read = _.extend(readAttributes, {
			userId: user._id
		}); 

		Read.insert(read); 
		return 
	}
});