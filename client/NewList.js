Template.NewList.events({
	'click .fa-close': function(){
		Session.set('newList', false);
	}
});