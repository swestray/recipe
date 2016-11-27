(function(){
	var recipes = [
		{ 
			name: 'Dish', 
			description: 'decription',
			picture: "img.jpg",
			ingredients:[
				{
					quantity: '1.5',
					unit: 'Cup',
					item: 'Greek Yogurt'
				},
				{
					quantity: '2',
					unit: 'Tbl',
					item: 'Paprika'
				}
				],
			steps: [
			'add the yogurt', 'do it bitch', 'add the bitch!'
			],
			yums:3
		},
		{
			name: "poopoo",
			description: "it's Stinky!",
			picture:'',
			ingredients:[
				{
					quantity: '69',
					unit: 'Tbl',
					item: 'Whores'
				},
				{
					quantity: '2',
					unit: 'cup',
					item: 'Papi'
				}
				],
			steps: [
			'toss it bout', 'get it going', 'bossa nova'
			],
			yums:2
		},
		{
			name: "margot",
			description: "is being a real Bitch",
			picture:"",
			ingredients:[],
			steps:[],
			yums:1
		},
	];
	var users = { name: 'Stone', isLoggedIn: true};

	var app = angular.module('recipe', []);

	app.directive("recipePhoto", function() {
    return {
    	restrict: "E",
    	templateUrl: "recipe-photo.html",
  		};
  	});

  	app.directive("ingredientForm", function() {
    return {
    	restrict: "E",
    	templateUrl: "ingredient-form.html",
  		};
  	});


	app.controller('UserController', function(){
		this.product = users;
	});

	app.controller('RecipeController', function(){
		this.product = recipes;

		this.addRecipe = function(product){
			product.push(this);
			this.product = {};
		}
	});

	app.controller('TabController', function(){
	    this.tab = 1;

	    this.setTab = function(newValue){
	      this.tab = newValue;
    	};

    	this.isSet = function(tabName){
      		return this.tab === tabName;
    	};
  	});

	app.controller('IngredientController', function(){
		this.ingredient = {};

		this.addIngredient = function(product){
			product.ingredients.push(this.ingredient);
			this.ingredient = {};
		};
	});

	app.controller('StepController', function(){
		this.step = {};

		this.addStep = function(product){
			product.steps.push(this.step);
			this.step = {};
		};
	});

})();