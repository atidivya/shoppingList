Template.SingleList.onCreated(function(){
	var self = this;
	self.autorun(function(){
		var id = FlowRouter.getParam('id');
		self.subscribe('singleListing', id);
	});
});


Template.SingleList.helpers({
	list: () => {
		var id = FlowRouter.getParam('id');
		return Lists.findOne({_id: id});
	}
});