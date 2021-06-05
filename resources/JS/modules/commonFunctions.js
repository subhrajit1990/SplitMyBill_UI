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
		return fetch('https://sharemybillapi.herokuapp.com/BillManager/'+uri,Object.assign(extraParameters,headers))
    		.then(response => response.json())
  		.then(json => {
    			console.log('parsed json', json); // access json.body here
			return json;
  		})
    		.catch(error => console.log(error))

	}
}
 
export default CommonFunctions
