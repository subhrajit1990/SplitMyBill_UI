/*import SplitMyBill from './modules/commonFunctions.js'
import createGroup from './modules/createGroup.js'

window.onload = function(){
    console.log("Test Started");
	
	
}

function formValidation(){
		const group = new createGroup( 3, 20 );
		console.log( group.id, group.params ); 
}*/

if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    	this.init = function(){
	
   	 }
	 this.formValidation = function(){
		var mainRt = new mainRoute();
		console.log(mainRt.getRouteName());
	}
}

bootStrapJS = SMB.bootStrapJSOps


