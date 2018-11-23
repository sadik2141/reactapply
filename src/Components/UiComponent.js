import React, { Component } from 'react';
//import CreateReactClass from 'create-react-class';
class UiComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            placeholder:'',
            size:1,
            style:{},
            classes:{},
            validation:{},
            returnString:'',
        }
    }
    checkIfVarLength (event,vallength) {
        if (vallength>0 && vallength!=='') {

            return true;
        }
        console.log("enter");
        return false;
    }
    checkIfVarVal  () {

    }
    getUIComponentString(){
        this.setState({returnString:"sucess"});
        return this.state.returnString;
    }

    render(){
        const {id,validation,size,style,placeholder,classes} = this.props;
        //this.setState({id:id,placeholder:placeholder,size:size,style:style,classes:classes,validation:validation});
        if(Object.keys(this.state.validation).length !==0){
            var v = Object.keys(this.state.validation);
            for(var i=0; i< Object.keys(this.state.validation).length; i++){
                console.log("enter11");
                // onChange: event => this.checkIfVarLength.bind(v[i]);

            }

        }else{
            console.log("enter21");
        }
        return(
            (null)
        );
    };
};
export default UiComponent;



