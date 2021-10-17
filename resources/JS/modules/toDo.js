import CommonFunctions from './commonFunctions.js'
export default class toDo extends CommonFunctions {
	constructor(params){
		super();
		this.params = params;
	}

	async toDoFetch(){
		const extraParameters = {			
		    method: 'POST',
		    body: JSON.stringify(this.params)
	  	};
		let fethData = await this.serverCall("expenses/api/fetchGroups",extraParameters,"").then(response => {
			 console.log(response); 
			 return response;
		 });
	    return fethData;
		}
	
	

	async toDoAdd(){
		const extraParameters = {			
		    method: 'POST',
		    body: JSON.stringify(this.params)
	  	};
		let fethData = await this.serverCall("expenses/api/fetchGroups",extraParameters,"").then(response => {
			 console.log(response); 
			 return response;
		 });
	    return fethData;
		}
	
	
	async toDoEdit(){
		const extraParameters = {			
		    method: 'POST',
		    body: JSON.stringify(this.params)
	  	};
		let fethData = await this.serverCall("expenses/api/fetchGroups",extraParameters,"").then(response => {
			 console.log(response); 
			 return response;
		 });
	    return fethData;
		}
	
	

	async toDoDelete(){
		const extraParameters = {			
		    method: 'POST',
		    body: JSON.stringify(this.params)
	  	};
		let fethData = await this.serverCall("expenses/api/fetchGroups",extraParameters,"").then(response => {
			 console.log(response); 
			 return response;
		 });
	    return fethData;
		}
	
	
}
