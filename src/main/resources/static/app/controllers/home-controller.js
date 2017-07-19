myApp.controller('HomeCtrl', function($scope,$route,$location,Page,baseURl,errorMessage,$http){
 
    var vm = $scope;
   
    Page.setTitle('Home'); // To set Page Title using factory
    
    //error messages from custom factory method.
    vm.errorMessage=errorMessage;

    //config parameter is need to send client data to server in ajaxrequest
    var config = {
        headers : {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
    }



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
  * Method Name  - password_validation
  * Created By   - Vaibhav Godambe
  * Created On   - 8 dec 2016
  * Modified By  - 
  * Modified On  - 
  * Purpose      - This method is use to validate the password filed   
*/

    vm.passwordValidation = function(params){
    
        var txtpassword = params.password; 
        //Minimum 8 characters at least 1 Alphabet, 1 Number and 1 Special Character:
        //var regPattren = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        var regPattren = /.{8,}/;
        
        // Vaibhav@123

        if(!txtpassword.match(regPattren))
        {
            vm.checkpassword=true;  //error
              
        }else{

            vm.checkpassword=false;  //success
             
        }

    }

    /*  
	* Method Name  - loginForm
	* Created By   - Vaibhav Godambe
	* Created On   - 24 nov 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to validate the login form  
*/ 
   

    vm.loginForm=function(myForm,params){
        vm.submitted=true;
       
        if(myForm.$valid && vm.checkpassword == false ) 
        {
       
           // alert(params.loginUsername);
           // alert(params.password);

            var data = $.param({
                username: params.loginUsername,
                password: params.password,
            });
           
        /*  $http.post('http://35.154.18.10/Services/FindService.asmx/GetDataOnHomepageDDl', data, config)
            .success(function (data, status, headers, config) {
              alert('Loginsucess' + data);
             console.log('Loginsucess   :   ' + JSON.stringify(data)); 
             console.log('Loginsucess status : ' + status);
             console.log(data.JSESSIONID);

            })
          .error(function (data, status, headers, config) {
             console.log("Error Data : " +data);
             console.log("Error Status : " +status);
          });
	 */

        /*$http({
            method: 'JSONP',
            url: loginurl
        }).
        success(function(data,status) {
            //your code when success
             alert('Loginsucess' + data);
             console.log('Loginsucess   :   ' + JSON.stringify(data)); 
             console.log('Loginsucess status : ' + status);
             console.log(data.JSESSIONID);
        }).
        error(function(data,status) {
            //your code when fails
             console.log("Error Data : " +data);
             console.log("Error Status : " +status);
        });*/
        
        
         $http.post('/login', data, config)
            .success(function (data, status, headers, config) {
              alert('Loginsucess' + data);
             console.log('Loginsucess   :   ' + JSON.stringify(data)); 
             console.log('Loginsucess status : ' + status);
             console.log(data.JSESSIONID);

            })
          .error(function (data, status, headers, config) {
             console.log("Error Data : " +data);
             console.log("Error Status : " +status);
          });
       
			 
        }
    }

       
    /*  
	* Method Name  - mediaquries for angualrjs
	* Created By   - Vaibhav Godambe
	* Created On   - 1 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to handle mediaquries using angualr 
    */    
       
    /*if (window.matchMedia("(max-width: 960px)").matches) {
        angular.element('#counting-right-box').addClass('col-sm-offset-2');
    } else {
        angular.element('#counting-right-bo').removeClass('col-sm-offset-2');
    }*/
        
        
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
    
    
    /*  
	* Method Name  - whatTab,whoTab,howTab
	* Created By   - Vaibhav Godambe
	* Created On   - 6 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This method is use to show data as per tabs
    */ 
    
    vm.what = true;// by default set value
    vm.who = false;// by default set value
    vm.how = false;// by default set value
    
    vm.whatTab = function(){
        vm.who = false;
        vm.how = false;
        vm.what = true;
    }
    
    vm.whoTab = function(){
        vm.what = false;
        vm.how = false;
        vm.who = true;
    }
    
    vm.howTab = function(){
        vm.what = false;
        vm.who = false;
        vm.how = true;
    }
    
    
});



  