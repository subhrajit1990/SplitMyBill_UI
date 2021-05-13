if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
		// doSmething
   	 }
	formValidation = function(){
		var form = document.getElementsByClassName("inputType"),
		form_validator_check = {
            		lastname: {
                		verify: ["nullcheck","lastname"],
                		message: ["Please enter the last name","Please enter 4 digits last name"]
            		},
            		firstname: {
                		verify: ["nullcheck"],
                		message: ["Please enter the first name"]
            		}
        	};
		
		var mainRt = new mainRoute();
		console.log(mainRt.getRouteName());
		mainRt. validateForm(form,form_validator_check);
	}
}

bootStrapJS = SMB.bootStrapJSOps


