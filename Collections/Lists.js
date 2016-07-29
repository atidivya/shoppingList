Lists = new Mongo.Collection('lists');

Lists.allow({
	insert: function(userId, doc){
		return !! userId;
	},
	update: function(userId, doc){
		return !! userId;
	}
});


ShoppingList = new SimpleSchema({

	name:{
		type: String,
		label: "Name of the Item"
	},
	amount:{
		type: String,
		label: "Quantity of the Item"
	},
	desiredStore:{
		type: String,
		label: "Desired Store",
		allowedValues: ['PingoDoce', 'Continente', 'Intermache'],
		autoform:{
			options:[
				{label: "Pingo Doce", value:"PingoDoce"},
				{label: "Continente", value:"Continente"},
				{label: "Intermache", value:"Intermache"},
			]
		}
	},
	expectedPrice:{
		type: String,
		label: "Expected Price of the Item"
	}

});


ListSchema = new SimpleSchema({

	name:{
		type: String,
		label: "Name of the List"
	},
	author:{
		type: String,
		label: "Author",
		autoValue: function(){
		return this.userId
		},
		autoform:{
			type:"hidden"
		}
	},
	createdAt:{
		type: Date,
		label: "Date of Creation",
		autoValue: function(){
		return new Date()
			},
			autoform:{
			type:"hidden"
			}
		},
	shoppingDate:{
		type: Date,
		optional: true,
		autoform: {
        type: "bootstrap-datepicker",
        datePickerOptions: {
            format: "dd/mm/yyyy",
            autoclose: true
        					}
        },
		label: "Date of Shopping",
	},
	shoppinglists:{

		
		type:[ShoppingList],
	},
	needToPurchase:{
		type: Boolean,
		defaultValue: false,
		optional:true,
		autoform:{
			type: "hidden"
		}
	}


});

Meteor.methods({
	toggleListItem: function(id, currentState){
		Lists.update(id, {
			$set:{
				needToPurchase: !currentState
			}
		});
	},
	deleteList: function(id){
		Lists.remove(id);
	}

});

Lists.attachSchema(ListSchema);