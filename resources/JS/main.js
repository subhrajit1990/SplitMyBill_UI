import SplitMyBill from './modules/commonFunctions.js'
import createGroup from './modules/createGroup.js'

window.onload = function(){
    console.log("Test Started");
	
	
}

function formValidation(){
		const group = new createGroup( 3, 20 );
		console.log( group.id, group.params ); 
}


