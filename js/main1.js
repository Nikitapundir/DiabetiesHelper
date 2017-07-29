var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome=function() {
		$location.url('home');
	}
})
foodieApp.controller('mainController',function($scope) {
	
  $scope.restaurants = [{

	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	id:1,
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://noblepig.com/images/2017/06/Cucumber-Edamame-Salad-with-Ginger-Soy-Vinaigrette-cover.jpg'
},
{
	
	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	id:2,
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://noblepig.com/images/2017/05/Chocolate-Avocado-Green-Smoothie-xo-1.jpg'
},
{

	name: 'Farzi Cafe',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	id:3,
	cuisines: 'Modern Indian',
	cost: '1200',
	hours: '12 Noon to 10 PM (Mon-Sun)',
	image: 'https://noblepig.com/images/2017/06/Cucumber-Edamame-Salad-with-Ginger-Soy-Vinaigrette-cover.jpg'
	},
	{
	
	name: 'Dominoz',
	address: 'Ground floor 27 , greenpark main new delhi',
	location: '	New Delhi',
	category: 'Dominoz pizza',
	vote: '5.0',
	id:4,
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'
	},
	{

	name: 'Burger King',
	address: 'SELECT CITY WALK shop No. S-2 2nd floor',
	location: 'Saket',
	category: 'Casual Dining, ',
	vote: '5.2',
	id:5,
	cuisines: 'Modern Indian',
	cost: '800',
	hours: '12 Noon to 11 PM (Mon-Sun)',
	image: 'http://knowledgeoverflow.com/wp-content/uploads/2013/03/food_photography_burger_by_masterdev777-d3h1ryk.jpg'
	}
]
});
foodieApp.controller('restaurantController',function($scope,$routeParams) {
    $scope.restaurantid=$routeParams.url;
	var restaurants = [{

        name: 'Farzi Cafe',
        address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
        location: 'Connaught Place',
        category: 'Casual Dining, Bar',
        vote: '4.2',
        cuisines: 'Modern Indian',
        cost: '2200',
        hours: '12 Noon to 1 AM (Mon-Sun)',
        image: 'https://noblepig.com/images/2017/06/Cucumber-Edamame-Salad-with-Ginger-Soy-Vinaigrette-cover.jpg'
    },
        {

            name: 'Farzi Cafe',
            address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
            location: 'Connaught Place',
            category: 'Casual Dining, Bar',
            vote: '4.2',
            cuisines: 'Modern Indian',
            cost: '2200',
            hours: '12 Noon to 1 AM (Mon-Sun)',
            image: 'https://noblepig.com/images/2017/05/Chocolate-Avocado-Green-Smoothie-xo-1.jpg'
        },
        {

            name: 'Farzi Cafe',
            address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
            location: 'Connaught Place',
            category: 'Casual Dining, Bar',
            vote: '4.2',
            cuisines: 'Modern Indian',
            cost: '1200',
            hours: '12 Noon to 10 PM (Mon-Sun)',
            image: 'https://noblepig.com/images/2017/06/Cucumber-Edamame-Salad-with-Ginger-Soy-Vinaigrette-cover.jpg'
        },
        {

            name: 'Dominoz',
            address: 'Ground floor 27 , greenpark main new delhi',
            location: '	New Delhi',
            category: 'Dominoz pizza',
            vote: '5.0',
            cuisines: 'Modern Indian',
            cost: '2200',
            hours: '12 Noon to 1 AM (Mon-Sun)',
            image: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg'
        },
        {

            name: 'Burger King',
            address: 'SELECT CITY WALK shop No. S-2 2nd floor',
            location: 'Saket',
            category: 'Casual Dining, ',
            vote: '5.2',
            cuisines: 'Modern Indian',
            cost: '800',
            hours: '12 Noon to 11 PM (Mon-Sun)',
            image: 'http://knowledgeoverflow.com/wp-content/uploads/2013/03/food_photography_burger_by_masterdev777-d3h1ryk.jpg'
        }
    ];

    $scope.restaurant=restaurants[$routeParams.id -1];
})


/*foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})*/
/*foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = 'Paste your restaurant Object here'
	$scope.restaurant = restaurants[$routeParams.id - 1];
})

	foodieApp.controller('restaurantController',function($scope,$routeParams) {
	$scope.restaurantId = $routeParams.id;
	var restaurants = 'Paste your restaurant Object here'
	$scope.restaurant = restaurants[$routeParams.id - 1];
})*/

