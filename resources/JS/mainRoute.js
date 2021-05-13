import SplitMyBill from './modules/commonFunctions.js'
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
}
window.mainRoute = mainRoute
