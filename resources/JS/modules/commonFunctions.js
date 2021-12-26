class CommonFunctions{
	constructor(){

	}

	genMasterTxnRefNo(){

		return new Date().valueOf();
	}

	getChannel(){

		return 'MB';
	}


	async  loadJson(url,data) {
	  let response = await fetch(url,data);
	  if (response.status == 200) {
	    return response.json();
	  } else {
	    throw new "Invalid http status :: "+response.status;
	  }
	}

	// Ask for a user name until github returns a valid user
	async serverCall(uri,extraParameters,type) {

	  let finalFetchData;
		
		const headers = {
				headers:{
		    			'Content-Type': 'application/json',
		     			'Accept': 'application/json',
			    		'channel': this.getChannel(),
			    		'masterTxnRefNo': this.genMasterTxnRefNo(),
					'Authorization':'Basic YWRtaW46cGFzc3dvcmQ=',
					"Access-Control-Allow-Origin": "*",
      					"Access-Control-Allow-Credentials": "true",
      					"Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      					"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
				}
		}

		let absPath = "";
		if(type == "M"){
			absPath = "https://nanananinano.herokuapp.com/Misc/";
		}else{
			absPath = "https://sharemybillapi.herokuapp.com/BillManager/";
		}
		
		while(true) {
		   
		    try {
		      finalFetchData = await this.loadJson(absPath+uri,Object.assign(extraParameters,headers));
		      break; // no error, exit loop
		    } catch(err) {
		      if ( err.response.status == 404) {
		        // loop continues after the alert
		        console.log( " 404 ");
		      } else {
		        // unknown error, rethrow
		        throw err;
		      }
		    }
	  	}

	console.log(finalFetchData);
	return finalFetchData;
	}
	
}
 
export default CommonFunctions
