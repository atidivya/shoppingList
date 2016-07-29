Template.ShoppingCart.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('lists');
	});
});


Template.ShoppingCart.helpers({
	shoppingCart: () => {
		return Lists.find({needToPurchase: true});
	}
});

Template.ShoppingCart.events({
	'click .toggle-checked':function(){
		Lists.update(this._id, {$set: {checked: !this.checked}});

	}
});
