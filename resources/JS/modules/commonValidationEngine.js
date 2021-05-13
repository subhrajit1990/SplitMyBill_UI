import CommonValidationFunctions from './commonValidationFunctions.js'
class CommonValidationEngine extends CommonValidationFunctions{
	constructor(form,formValidator){
		super(); // must call while extending a class, this constructor is from extending class
		this.form= form;
		this.formValidator = formValidator;
	}
	
	commonValidation(){
		console.log("Validation starts with validation engine"+this.form);
	}
}

export default CommonValidationEngine;
