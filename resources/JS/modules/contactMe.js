import CommonFunctions from './commonFunctions.js'
export default class ContactMe extends CommonFunctions{
	constructor(params){
		super();
		this.params=params;
	}

	contact(){
		const extraParameters = {
			method: 'POST',
		    body: JSON.stringify(this.params)
	  	};

	  	return this.serverCall("Misc/api/contactMe",extraParameters,"");
	}
}