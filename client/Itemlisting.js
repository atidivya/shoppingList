Template.Itemlisting.onCreated(function(){
	var self = this;
	self.autorun(function(){
		self.subscribe('lists');
	});
});


Template.Itemlisting.helpers({
	lists: () => {
	return Lists.find({needToPurchase: true});
	}
});