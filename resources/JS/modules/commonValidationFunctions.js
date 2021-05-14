class CommonValidationFunctions{
    constructor(){
        this.err="";
    }
    
    // sample validation methods
    
    nullCheck(s) {
      this.err = s.length ? 0 : 5;
    return this.err;
    }
    
    lastname(s){
        this.err = s.length > 4 ? 0 : 5;
    return this.err;
    }
    
    email(s) {   
        let email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s));
        this.err = a ? 0 : 6;
    return this.err;
    }
    
    number(s) {
        s =  s.replace(/,/g , "");
        s = nwts(s) - 0;
        this.err = (s == 0) || isNaN(s) ? 10 : 0;
    return [this.err ? 0 : s];
    }

    floatNum(s) {
        const RE = /^[0-9]{1,4}(\.[0-9]{0,3})?$/;
        s = parseFloat(nwts(s));
        this.err = RE.test(s) ? 0 : 10;
    return this.err;
  }
}
export default CommonValidationFunctions
