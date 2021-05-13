import SplitMyBill from './modules/commonValidationEngine.js'
import createGroup from './modules/createGroup.js' 

class mainRoute{
  constructor(){
      console.log("main route");
    }
  
  getRouteName(){
   
      return "route"
    }
	
   validateForm(form, formValidator){
	var flag = false;
   	console.log(JSON.stringify(form) + " :: "+JSON.stringify(formValidator));
	return flag;
   }
  createGroupRoute(){
 	let creationGroupStatus = flase;
   	const group = new createGroup( 3, 20 );
	console.log( group.id, group.params );
	return creationGroupStatus;
  }
}
window.mainRoute = mainRoute
