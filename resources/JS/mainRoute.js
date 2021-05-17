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
		
		
		
		const extraParameters = {
  	
    headers: {
    	'Content-Type': 'application/json',
     	'Accept': 'application/json',
	    'channel': 'MB',
	    'masterTxnRefNo': '12121',
    },
    method: 'POST',
    body: JSON.stringify({"createGroupRequest":{
	"groupName":"ABC",
	"groupType":"asdasd",
	"groupMembers":[{"accountName":"SSSSSSS","memberAccountNumber":"31312312"},{"accountName":"PPPPPPPPPPPPPP","memberAccountNumber":"23423423432"}],
	"creatorAccountNumber":"892749724797"
}})
  };

  return fetch('https://sharemybillapi.herokuapp.com/BillManager/expenses/api/createGroup',extraParameters)
    .then(res => console.log(JSON.stringify(res)))
    .catch(error => console.log(error))
		
		
		
		
		
		
	} catch(err){
		throw new Error("Exception happened during group creation");
	}
	return creationGroupStatus;
  }
}
window.MainRoute = MainRoute
