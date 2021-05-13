class CommonValidationFunctions{
    constructor(){
        this.err="";
    }
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
}
export default CommonValidationFunctions
