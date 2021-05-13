import SplitMyBill from './modules/commonFunctions.js'
import createGroup from './modules/createGroup.js' 

class mainRoute{
  constructor(){
      console.log("main route");
    }
  
  getRouteName(){
    const group = new createGroup( 3, 20 );
		console.log( group.id, group.params );
      return "route"
    }
	
   validateForm(form, formValidator){
   	console.log(form + " :: "+formValidator);
   }
}
window.mainRoute = mainRoute
