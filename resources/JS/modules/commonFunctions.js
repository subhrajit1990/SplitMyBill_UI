export default class CommonFunctions{
	constructor(){

	}

	genMasterTxnRefNo(){

		return new Date().valueOf();
	}

	getChannel(){

		return 'MB';
	}


	serverCall(extraParameters){

	return fetch('https://sharemybillapi.herokuapp.com/BillManager/expenses/api/createGroup',extraParameters)
    	.then(res => console.log(JSON.stringify(res)))
    	.catch(error => console.log(error))

	}



}