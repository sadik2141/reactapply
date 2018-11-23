import React, { Component } from 'react';
//import logo from "../logo.svg";
import UiComponent from './UiComponent';
import ReactTooltip from 'react-tooltip'
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import '../App.css'
class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            type: '',
            placeholder:'',
            id:'',
            size:{},
            style:{},
            classes:{},
            popoverOpen:false
        }
    }

    verifyLength(value, length) {
        if (value.length > length) {
            return true;
        }
        return false;
    }
    verifyEmail(value) {
        var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (emailRex.test(value)) {
            return true;
        }
        return false;
    }
    veritfyInt(value) {
        return isNaN(value) ? false : true;
    }

    validate = (event, stateName, type, stateNameEqualTo) => {

        switch (type) {
            case "length":
                if (this.verifyLength(event.target.value, stateNameEqualTo)) {
                    this.setState({name:event.target.value})
                    console.log("text validate sucess");
                } else {
                    this.setState({name:event.target.value})
                    console.log("text validate false");
                }
                break;
            case "email":
                if (this.verifyEmail(event.target.value)) {
                    this.setState({name:event.target.value})
                    console.log("email validate sucess");
                } else {
                    this.setState({name:event.target.value})
                    console.log("email validate false");
                }
                break;
            case "int":
                if (this.veritfyInt(event.target.value)) {
                    this.setState({name:event.target.value})
                    console.log("int validate sucess");
                } else {
                    this.setState({name:event.target.value})
                    console.log("int validate false");
                }
                break;
            default:
                break;
        }
    }
    popover =()=>{
        this.setState({popover:true})
}
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    render() {
        const{type,placeholder,id,size,style,classes}=this.props;
        return (

            <div style={{padding:"1em"}}>
                {/*<input type={type} placeholder={placeholder} id={id} size={size} style={style}className={classes}/>*/}
                <input
                    type={"text"}
                    placeholder={"sample"}
                    id={"name"}
                    name={"email"}
                    size={{fontSize:"14px"}}
                    // style={{background: "red"}}
                    className={"align-input"}
                    onChange={ event =>this.validate(event,"email", "email", 0)}
                    value={this.state.name}
                />
                {/*{this.state.popover==true ?*/}
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="name" toggle={this.toggle}>
                        <PopoverHeader>Popover Title</PopoverHeader>
                        <PopoverBody>Popover</PopoverBody>
                    </Popover>
                    {/*:null*/}
                {/*}*/}
                <ReactTooltip/>
            </div>


        );
    }
}

export default InputComponent;