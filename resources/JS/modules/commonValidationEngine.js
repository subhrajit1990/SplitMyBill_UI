import commonValidationFunctions from './commonValidationFunctions.js'
class commonValidationEngine extends commonValidationFunctions{
	constructor(){
		super(); // must call while extending a class, this constructor is from extending class
	}
	
	commonValidation(form,formValidator){
		console.log("Validation starts with validation engine");
	}
}

export default commonValidationEngine;
