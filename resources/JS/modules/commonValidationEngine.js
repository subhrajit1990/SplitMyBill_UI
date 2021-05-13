import CommonValidationFunctions from './commonValidationFunctions.js'
class CommonValidationEngine extends CommonValidationFunctions{
	constructor(form,formValidator){
		super(); // must call while extending a class, this constructor is from extending class
		this.form= form;
		this.formValidator = formValidator;
	}
	
	commonValidationFields(){
		let errorCount = 0,
        	    element,
        	    n,
        	    out,
		    tempForm = this.form,
		    formValidator = this.formValidator;
        	Object.keys(tempForm).map(function(key, index) {
            		if(typeof parseInt(key) == "number" && !isNaN(parseInt(key)) ){
                		element = tempForm[index];
                		if (!element.hasAttribute("name")) {
                    			n = element.id, out;
                		} else if (element.hasAttribute("src")) {
                    			n = element.src, out;
                		} else {
                    			n = element.name, out;
               			}
                		if (formValidator[n] && formValidator[n].verify) {
                    			(formValidator[n].verify).map(function(i,e){
                   	   			this.commonValidatorValid(element, i);
                        			if (err) {
                            				formValidator[n].err = err;                       
                            				console.log("ERROR "+formValidator[n].message[e] || "Error occured");
                            				errorCount++;
                        			}
                    			})
                		}
            		}
        	});
        	if (errorCount > 0) {
            	  return false;
        	}
		
		//let nullCheckStatus = this.nullCheck("s")
		console.log("Validation starts with validation engine"+this.form + " :: "+nullCheckStatus);
        	return true;
	
	}
	
	commonValidatorValid(element, check) {
    		if (element.type == 'text' || element.type == 'textarea' || element.type == 'email') {
        		return this[check](element.value);   
    		} else {
        		return this[check](element);
    		}
	}
}

export default CommonValidationEngine;
