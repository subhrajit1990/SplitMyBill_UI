import CommonValidationFunctions from './commonValidationFunctions.js'
class CommonValidationEngine extends CommonValidationFunctions{
	constructor(form,formValidator){
		super(); // must call while extending a class, this constructor is from extending class
		this.form= form;
		this.formValidator = formValidator;
	}
	
	commonValidatorValid(element, check) {
    		if (element.type == 'text' || element.type == 'textarea' || element.type == 'email') {
        		return this[check](element.value);   
    		} else {
        		return this[check](element);
    		}
	}
	
	commonValidationFields(){
		let errorCount = 0,
        	    element,
        	    n,
        	    out,
		    tempForm = this.form,
		    formValidator = this.formValidator,
		    self = this;
		
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
                   	   			let err = self.commonValidatorValid(element, i);
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
		console.log("Validation starts with validation engine"+this.form + " :: ");
        	return true;	
	}	
}

export default CommonValidationEngine;
