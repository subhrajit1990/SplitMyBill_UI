import CommonFunctions from './commonFunctions.js'
export default class AddMemberToGroup extends CommonFunctions {
	constructor(params){
		super();
		this.params = params;
	}

	addMember(){

		const extraParameters = {
			
		    method: 'POST',
		    body: JSON.stringify(this.params)
	  	};

	  	return this.serverCall("expenses/api/addMembers",extraParameters);
		
	}
}
