function verifyLength(value, length) {
    if (value.length > length) {
        return true;
    }
    return false;
}
function verifyEmail(value) {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
        return true;
    }
    return false;
}
function veritfyInt(value) {
    return isNaN(value) ? false : true;
}

export function validate (event, id, type, stateIdEqualTo)  {
    console.log("enter validation")
    console.log(id+" "+type+" "+ stateIdEqualTo)
    // console.log(this.setState({email:event.target.value}));
    switch (type) {
        case "length":
            if (verifyLength(event.target.value, stateIdEqualTo)) {
                console.log(event.target.value);
                // this.setState({id:event.target.value})
                console.log("text validate sucess");
            } else {
                // this.setState({id:event.target.value})
                console.log("text validate false");
            }
            break;
        case "email":
            console.log("enter email")

            if (verifyEmail(event.target.value)) {

                // this.setState({id:event.target.value})
                console.log("email validate sucess");
            } else {
                // this.setState({id:event.target.value})
                console.log("email validate false");
            }
            break;
        case "int":
            if (veritfyInt(event.target.value)) {
                this.setState({id:event.target.value})
                console.log("int validate sucess");
            } else {
                this.setState({id:event.target.value})
                console.log("int validate false");
            }
            break;
        default:
            break;
    }
}
export default validate;