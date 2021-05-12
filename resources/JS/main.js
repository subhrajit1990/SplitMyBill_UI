import SplitMyBill, {name} from '/modules/commonFunctions.js'

/*if (typeof (SMB) == "undefined") {
    SMB = {}
}

SMB.bootStrapJSOps = new function(){	
    this.init = function(){
	console.log("executing");
	console.log(SplitMyBill.getName());
    }

}

bootStrapJS = SMB.bootStrapJSOps */

console.log("helo");
let val = SplitMyBill.getName();
console.log(val);
