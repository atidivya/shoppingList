//Meteor.subscribe('lists');

Template.Lists.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('lists');
	});
});


Template.Lists.helpers({
	lists: () => {
		return Lists.find({});
	}
});

Template.Lists.events({
	'click .new-list': () => {
		Session.set('newList', true);
	}
});