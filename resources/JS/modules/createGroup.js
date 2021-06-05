import CommonFunctions from './commonFunctions.js'
export default class CreateGroup extends CommonFunctions {
	constructor(params){
		super();
		this.params = params;
	}

	async groupCreation(){

	const extraParameters = {
		
	    method: 'POST',
	    body: JSON.stringify(this.params)
  	};
	let fethData = await this.serverCall("expenses/api/createGroup",extraParameters).then(response => {
		 console.log(response); 
		 return response;
	 });
    return fethData;
	}
}
