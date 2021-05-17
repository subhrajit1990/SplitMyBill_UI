import CommonFunctions from './commonFunctions.js'
export default class CreateGroup extends CommonFunctions {
	constructor(id,params){
		super();
		this.params = params;
	}

	groupCreation(){

	const extraParameters = {
  	
	    headers: {
	    	'Content-Type': 'application/json',
	     	'Accept': 'application/json',
		    'channel': this.getChannel(),
		    'masterTxnRefNo': this.genMasterTxnRefNo(),
	    },
	    method: 'POST',
	    body: JSON.stringify(this.params)
  	};

  	return this.serverCall(extraParameters);
		
	}
}
