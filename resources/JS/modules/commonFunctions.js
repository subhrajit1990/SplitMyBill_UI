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
    throw new HttpError(response);
  }
}

// Ask for a user name until github returns a valid user
async serverCall(uri,extraParameters) {

  let finalFetchData;
	
	const headers = {
			headers:{
	    			'Content-Type': 'application/json',
	     			'Accept': 'application/json',
		    		'channel': this.getChannel(),
		    		'masterTxnRefNo': this.genMasterTxnRefNo(),
			}
	    	}
	
  while(true) {
   
    try {
      finalFetchData = await loadJson('https://sharemybillapi.herokuapp.com/BillManager/'+uri,Object.assign(extraParameters,headers));
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
