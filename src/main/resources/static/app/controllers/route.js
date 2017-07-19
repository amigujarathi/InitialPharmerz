
/*-----------------------------------
 Menu bar routing
 -----------------------------------*/


myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl : "views/home.html",
        controller: "HomeCtrl"
      }).
	  when('/product', {
        templateUrl : "views/product.html",
        controller: "ProductCtrl"
      }).
	  when('/aboutus', {
         templateUrl : "views/aboutus.html",
         controller: "AboutusCtrl"
      }).
      when('/contactus', {
         templateUrl : "views/contactus.html",
         controller: "ContactusCtrl"
      }).
      when('/categories', {
         templateUrl : "views/categories.html",
		 controller: "CategoriesCtrl"
      }).
      when('/privacypolicy', {
         templateUrl : "views/privacypolicy.html"
      }).
      when('/termsofsales', {
         templateUrl : "views/termsofsales.html"
      }).
      when('/reportabout', {
         templateUrl : "views/reportabout.html"
      }).
	  when('/admindashbord', {
         templateUrl : "views/admin-dashbord.html",
		 controller: "testController"
      }).
      otherwise({
        redirectTo: '/home'
      });
     
      
  }]);