Template.List.onCreated(function(){
	this.editMode = new ReactiveVar(false);
});


Template.List.helpers({
	updateListId: function() {
		return this._id;
	},
	editMode: function(){
		return Template.instance().editMode.get();
	}
});



Template.List.events({
	'click .toggle-list': function() {
		Meteor.call('toggleListItem', this._id, this.needToPurchase);

	},
	'click .fa-trash': function(){
		Meteor.call('deleteList', this._id);
	},
	'click .fa-pencil': function(event, template){
		template.editMode.set(!template.editMode.get());
	}
});