 /*  
	* factory Name  - page
	* Created By   - Vaibhav Godambe
	* Created On   - 2 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This factory is use to Set page title
*/ 

myApp.factory('Page', function(){
    
  var title = ' ';// default title set first
  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; }
  };
});

/*  
	* Method Name  - baseURl
	* Created By   - vaibhav godambe
	* Created On   - 8 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This factory is used to manage all error messages.		  
*/

myApp.factory('baseURl',function() {
	var url = 'http://52.220.219.72:8080/PharmerzWeb/';

	return url;
})


/*  
	* Method Name  - errorMessage
	* Created By   - vaibhav godambe
	* Created On   - 8 dec 2016
	* Modified By  - 
	* Modified On  - 
	* Purpose      - This factory is used to manage all error messages.		  
*/
myApp.factory('errorMessage', function(){
	 var errMessage={
		 emailerror:'Please enter valid email address',
		 filedrequired:'This is required field',
		 passworderror:'Must contain number and letter and special character, and at least 8 or more characters',
		 
		 fname:'Please enter valid first name',
		 lname:'Please enter valid last name',
		 mobile:'Please enter valid mobile number',
		 cpassword:'Passwords do not match',
		 phone:'Please enter valid phone number',
		 designation:'Please enter valid designation',
		 company:'Please enter valid company name',
		 description:'Please enter valid description',
		 skill:'Please enter valid skill',
		 schoolname:'Please enter valid school name',
		 passingyear:'Please enter valid passing year',
		 studyfield:'Please enter valid study field',
		 marks:'Please enter valid marks',
		 activity:'Please enter valid activity',
		 title:'Please enter valid title'
		};
	 return errMessage;
});