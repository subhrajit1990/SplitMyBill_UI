class CommonFunctions{
	constructor(){

	}

	genMasterTxnRefNo(){

		return new Date().valueOf();
	}

	getChannel(){

		return 'MB';
	}


	serverCall(uri,extraParameters){
		const headers = {
	    		'Content-Type': 'application/json',
	     		'Accept': 'application/json',
		    	'channel': this.getChannel(),
		    	'masterTxnRefNo': this.genMasterTxnRefNo(),
	    	}
		return fetch('https://sharemybillapi.herokuapp.com/BillManager/expenses/api/createGroup',extraParameters)
    		.then(res => console.log(JSON.stringify(res)))
    		.catch(error => console.log(error))

	}
}
 
export default CommonFunctions
