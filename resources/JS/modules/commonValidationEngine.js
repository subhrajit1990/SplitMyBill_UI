import commonValidationFunctions from './modules/commonValidationFunctions.js'
class commonValidationEngine extends commonValidationFunctions{
	constructor(){
	}
	
	commonValidation(form,formValidator){
		console.log("Validation starts with validation engine");
	}
}

export default commonValidationEngine;
