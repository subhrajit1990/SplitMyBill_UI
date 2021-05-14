import commonValidationEngine from './modules/commonValidationEngine.js'
import createGroup from './modules/createGroup.js' 

class MainRoute{
  constructor(){
      console.log("main route");
    }
  
  getRouteName(){
   
      return "route"
    }
	
   validateForm(form, formValidator){
	let validateFormflag = false;
	   try{
		let validationOps = new commonValidationEngine(form,formValidator);
		validateFormflag = validationOps.commonValidationFields();
   		console.log(JSON.stringify(form) + " :: "+JSON.stringify(formValidator) + " :: "+validateFormflag);
	   }catch(err){
	   	throw new Error("Exception happened during form validation");
	   }
	return validateFormflag;
   }
  createGroupRoute(){
 	let creationGroupStatus = false;
	try{
   	const group = new createGroup( 3, 20 );
	console.log( group.id, group.params );
	} catch(err){
		throw new Error("Exception happened during group creation");
	}
	return creationGroupStatus;
  }
}
window.MainRoute = MainRoute
