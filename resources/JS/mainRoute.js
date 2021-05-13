import commonValidationEngine from './modules/commonValidationEngine.js'
import createGroup from './modules/createGroup.js' 

class mainRoute{
  constructor(){
      console.log("main route");
    }
  
  getRouteName(){
   
      return "route"
    }
	
   validateForm(form, formValidator){
	var validateFormflag = true;
	new commonValidationEngine(form,formValidator);
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
window.mainRoute = mainRoute
