myApp.controller('AboutusCtrl', function($scope,$route,$location,Page){
  
    
    var vm = $scope;
    
    Page.setTitle('About Us'); // To set Page Title using factory
    
    
    /*  
	* Method Name  - getClass
	* Created By   - Vaibhav Godambe
	* Created On   - 24 nov 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to Manage active class for side bar menu.
*/ 
    $scope.getClass = function (path) {
        return ($location.path().substr(0, path.length) === path) ? 'activenav' : '';
    }
    /*  
	* Method Name  - toggleShowPassword
	* Created By   - Vaibhav Godambe
	* Created On   - 24 nov 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to Hide & show password 
*/ 
    vm.params = {};
    vm.showPassword = false;
  
    vm.toggleShowPassword = function() {
        vm.showPassword = !vm.showPassword;
    }

    /*  
	* Method Name  - loginForm
	* Created By   - Vaibhav Godambe
	* Created On   - 24 nov 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to validate the login form  
*/ 

    vm.loginForm=function(myForm){
        vm.submitted=true;
        if(myForm.$valid){
        //alert('success');
			 
			 	 
        // call $http.post();
			 
			 
			 
        }else{
			
        // alert('error');
        }
		
    }
    /*  
	* Method Name  - scrolltotop
	* Created By   - Vaibhav Godambe
	* Created On   - 2 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to move to top position
    */      
        
    vm.movetoTop = function() {
        // set the location.hash to the id of
        // the element you wish to scroll to.
        //$location.hash('top');

        // call $anchorScroll()
       // $anchorScroll();
        var scrollDuration = 500;
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        console.log(scrollStep);
            
        var scrollInterval = setInterval(function(){  
          if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval); 
          }
        },15);	
    }
   
});