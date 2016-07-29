
if(Meteor.isClient){
	Accounts.onLogin(function() {
		FlowRouter.go('shopping-list');

	});

	Accounts.onLogout(function() {
		FlowRouter.go('home');
	
	});
}





FlowRouter.triggers.enter([function (context, redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}

}]);



FlowRouter.route('/', {

	name: 'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('shopping-list');
		}
		BlazeLayout.render('HomeLayout');
	}

});

FlowRouter.route('/shopping-list', {

	name: 'shopping-list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Lists'});
	}

});


FlowRouter.route('/list/:id', {

	name: 'list',
	action(){
		BlazeLayout.render('MainLayout', {main: 'SingleList'});
	}

});

FlowRouter.route('/itemlisting',{
	name: 'itemlisting',
	action(){
		BlazeLayout.render('MainLayout', {main: 'Itemlisting'} );
	}
});

FlowRouter.route('/shopping-cart',{
	name: 'shopping-cart',
	action(){
		BlazeLayout.render('MainLayout', {main: 'ShoppingCart'} );
	}
});