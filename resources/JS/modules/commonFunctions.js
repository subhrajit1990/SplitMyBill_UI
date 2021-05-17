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
			headers:{
	    		'Content-Type': 'application/json',
	     		'Accept': 'application/json',
		    	'channel': this.getChannel(),
		    	'masterTxnRefNo': this.genMasterTxnRefNo(),
			}
	    	}
		return fetch('https://sharemybillapi.herokuapp.com/BillManager/expenses/api/createGroup',Object.assign(extraParameters,headers))
    		.then(res => console.log(JSON.stringify(res)))
    		.catch(error => console.log(error))

	}
}
 
export default CommonFunctions
