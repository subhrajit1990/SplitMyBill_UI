class CommonFunctions{
	constructor(){

	}

	genMasterTxnRefNo(){

		return new Date().valueOf();
	}

	getChannel(){

		return 'MB';
	}


	async serverCall(uri,extraParameters){
		const headers = {
			headers:{
	    			'Content-Type': 'application/json',
	     			'Accept': 'application/json',
		    		'channel': this.getChannel(),
		    		'masterTxnRefNo': this.genMasterTxnRefNo(),
			}
	    	}
		
		
		/* const fetchValue = await fetch('https://sharemybillapi.herokuapp.com/BillManager/'+uri,Object.assign(extraParameters,headers))
    		.then(response => await response.json())
  		.then(json => {
    			console.log('parsed json', json); // access json.body here
			return json;
  		})
    		.catch(error => console.log(error))
		
		return fetchValue; */
		
		let finalData = "";
		try{
		let res = await fetch('https://sharemybillapi.herokuapp.com/BillManager/'+uri,Object.assign(extraParameters,headers));
        	 finalData = await response.json(); 
		}catch(err){
			console.log(err);
		}
		retunr finalData;
	}
}
 
export default CommonFunctions
