import CommonValidationEngine from './modules/commonValidationEngine.js'
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
		let validationOps = new CommonValidationEngine(form,formValidator);
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
		const payLoad = {"createGroupRequest":{
			"groupName":"ABC",
			"groupType":"asdasd",
			"groupMembers":[{"accountName":"SSSSSSS","memberAccountNumber":"31312312"},{"accountName":"PPPPPPPPPPPPPP","memberAccountNumber":"23423423432"}],
	    	"creatorAccountNumber":"892749724797"
		}};
   		const group = new createGroup( payLoad );
   		var status = group.groupCreation();
		console.log( status  );
		
	} catch(err){
		throw new Error("Exception happened during group creation");
	}
	return creationGroupStatus;
  }
}
window.MainRoute = MainRoute
