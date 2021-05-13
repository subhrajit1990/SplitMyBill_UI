import CommonValidationFunctions from './commonValidationFunctions.js'
class CommonValidationEngine extends CommonValidationFunctions{
	constructor(form,formValidator){
		super(); // must call while extending a class, this constructor is from extending class
		this.form= form;
		this.formValidator = formValidator;
	}
	
	commonValidation(){
		let nullCheckStatus = super.nullCheck("s")
		console.log("Validation starts with validation engine"+this.form + " :: "+nullCheckStatus);
	}
}

export default CommonValidationEngine;
