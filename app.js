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
			score:3
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
			score:2
		},
		{
			name: "margot",
			description: "is being a real Bitch",
			picture:"",
			ingredients:[],
			steps:[],
			score:1
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
		this.newRecipe = {
			name: "",
			description: "",
			picture:"https://farm4.staticflickr.com/3261/2801924702_ffbdeda927_d.jpg",
			ingredients:[
				{
					quantity:1,
					unit: 'berry',
					item: 'boy'
				}
			],
			steps:[],
			reviews:['fucking sick braj', 'oh heck yes'],
			score: 0
		};
		this.addRecipe = function(product){
			recipes.push(product);
			this.newRecipe = {
				name: "",
				description: "",
				picture:"",
				ingredients:[],
				steps:[],
				reviews:[],
				score: 0
			};
		};
	});

	app.controller('CollapseController', function(){
		var collapsed = true;

		this.collapse = function(product){
			if(collapsed){
				this.collapseBtn = '^'
				collapsed = false;
			}
			else{
				this.collapseBtn = 'down'
				collapsed = true;
			}
		}
	});

	app.controller('YumController', function(){
		var isYummed = false;
		var isYucked = false;

		this.yum = function (product) {
			if(isYummed){
				isYummed = false;
				this.yumButton = 'yum';
				product.score -= 1

			}
			else if(isYucked){
				isYucked = false;
				isYummed = true;
				this.yumButton = 'YUM';
				this.yuckButton = 'yuck';
				product.score += 2;
			}
			else{
				isYummed = true;
				this.yumButton = 'YUM'
				product.score += 1;
			}
		};
		this.yuck = function (product) {
			if(isYucked){
				isYucked = false;
				this.yuckButton = 'yuck'
				product.score += 1;
			}
			else if(isYummed){
				isYummed = false;
				isYucked = true;
				this.yuckButton = 'YUCK';
				this.yumButton = 'yum';
				product.score -= 2;
			}
			else{
				isYucked = true;
				this.yuckButton = 'YUCK'
				product.score -= 1;
			}
		};

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

	app.controller('ReviewController', function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		}
	});

})();