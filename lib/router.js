Router.configure({
	layoutTemplate: 'layout',
	 loadingTemplate: 'loading'
});

Router.route('/', {
	template: 'read'
}); 


Router.route('/addread', {
	name: 'addRead', 
	template: 'addRead',
	data: function() {
		console.log('hai world'); 
	}
});