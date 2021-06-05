import CommonFunctions from './commonFunctions.js'
export default class CreateGroup extends CommonFunctions {
	constructor(params){
		super();
		this.params = params;
	}

	groupCreation(){

	const extraParameters = {
		
	    method: 'POST',
	    body: JSON.stringify(this.params)
  	};
	 this.serverCall().then(response => {
		 console.log(response); return response;
	 });
  	//return this.serverCall("expenses/api/createGroup",extraParameters);
        return "data";
	}
}
