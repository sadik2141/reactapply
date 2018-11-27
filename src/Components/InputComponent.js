import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody, Form, FormGroup, Input ,Tooltip } from 'reactstrap';
import '../App.css'
class InputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            type: '',
            placeholder:'',
            id:'',
            size:{},
            style:{},
            classes:{},
            popoverOpen:false,
            tooltipOpen: false,
            popoverTittle:'',
            popoverBody:'',
            tooltipMessage:'',
            popoverPlacement:'',
            tooltipPlacement:'',
            popoverflag:false,
            tooltipflag:false,
            validateType:''

        }
        this.toggletooltip = this.toggletooltip.bind(this)
        this.toggle = this.toggle.bind(this)

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

        validate = (event, type, stateNameEqualTo) => {
        console.log(this.setState({email:event.target.value}));
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

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    toggletooltip() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render() {
        const{type,placeholder,id,name,size,style,classes,popoverTittle,popoverBody,tooltipMessage,
              popoverPlacement, tooltipPlacement,popoverflag,tooltipflag,validateType}=this.props;
        var ser=this.state+'.'+name;
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type={type}
                           name={name}
                           id={id}
                           placeholder={placeholder}
                           onChange={ event =>this.validate(event, {validateType}, 0)}
                           // value={this.state.email}
                           onClick={this.toggle}
                    />

                </FormGroup>
                { popoverflag == true ?
                <Popover placement={popoverPlacement} isOpen={this.state.popoverOpen} target={name} toggle={this.toggle}>
                    <PopoverHeader>{popoverTittle}</PopoverHeader>
                    <PopoverBody>{popoverBody}</PopoverBody>
                </Popover>
                    :null }
                { tooltipflag == true ?
                <Tooltip placement={tooltipPlacement} isOpen={this.state.tooltipOpen} target={name} toggle={this.toggletooltip}>
                    {tooltipMessage}
                </Tooltip>
                    :null}
            </Form>




        );
    }
}

export default InputComponent;