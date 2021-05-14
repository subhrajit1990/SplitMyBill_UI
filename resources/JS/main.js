if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSomething
   	 }
	formValidation = function(){
		// Sample request payload construction -- Starts
		var form = document.getElementsByClassName("inputType"),
		form_validator_check = {
            		lastname: {
                		verify: ["nullCheck","lastname"],
                		message: ["Please enter the last name","Please enter 4 digits last name"]
            		},
            		firstname: {
                		verify: ["nullCheck"],
                		message: ["Please enter the first name"]
            		}
        	};
		// Sample request payload construction -- Ends
		
		// Sample function call -- Starts
		var mainRt = new MainRoute();
		console.log(mainRt.getRouteName());
		if(mainRt.validateForm(form,form_validator_check)){
			console.log("validation success");
			mainRt.createGroupRoute();
		}else{
			console.log("validation fail");
		}
		// Sample function call -- Ends
	}
}

bootStrapJS = SMB.bootStrapJSOps


