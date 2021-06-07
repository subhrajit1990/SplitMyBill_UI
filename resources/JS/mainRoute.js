import CommonValidationEngine from './modules/commonValidationEngine.js'
import createGroup from './modules/createGroup.js' 
import addMemberToGroup from './modules/addMemberToGroup.js' 
import cardPlay from './modules/cardPlay.js' 

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
  	async createGroupRoute(payLoad){
	 	let creationGroupRes = "";
		try{
	   		const group = new createGroup( payLoad );
	   		 creationGroupRes = await group.groupCreation();
			console.log( creationGroupRes  );
			
		} catch(err){
			throw new Error("Exception happened during group creation");
		}
		return creationGroupRes;
  	}

	async fetchGroupRoute(payLoad){
 		let fetchGroupRes = "";
		try{
	   		const group = new createGroup( payLoad );
	   		 fetchGroupRes = await group.fetchGroup();
			console.log( fetchGroupRes  );
			
		} catch(err){
			throw new Error("Exception happened during group fetch");
		}
		return fetchGroupRes;
	}
	
  	addMemberToGroupRoute(){
	 	let addMemberStatus = false;
		try{
			const payLoad = {"addMembersRequest":{
				"groupId":"ABC",
				"groupMembers":[{"accountName":"SSSSSSS","memberAccountNumber":"31312312"},{"accountName":"PPPPPPPPPPPPPP","memberAccountNumber":"23423423432"}],
			}};
	   		const addMem = new addMemberToGroup( payLoad );
	   		var status = addMem.addMember();
			console.log( status  );
			
		} catch(err){
			throw new Error("Exception happened during add member to group");
		}
		return addMemberStatus;
  	}

	gamePlay(timer, time){
		let counter = new cardPlay(timer, time); // expects in seconds
		counter.initiateGame(); 
	}
}
window.MainRoute = MainRoute
