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
	var validateFormflag = true;
	let validationOps = new commonValidationEngine(form,formValidator);
	validationOps.commonValidationFields();
   	console.log(JSON.stringify(form) + " :: "+JSON.stringify(formValidator));
	return validateFormflag;
   }
  createGroupRoute(){
 	let creationGroupStatus = false;
   	const group = new createGroup( 3, 20 );
	console.log( group.id, group.params );
	return creationGroupStatus;
  }
}
window.MainRoute = MainRoute
