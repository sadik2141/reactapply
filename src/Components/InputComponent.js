import React, { Component } from 'react';
import UiComponent from './UiComponent';
import { Popover, PopoverHeader, PopoverBody, Form, FormGroup, Input ,Tooltip } from 'reactstrap';
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
            popoverOpen:false,
            tooltipOpen: false
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
        const{type,placeholder,id,size,style,classes}=this.props;
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type="email"
                           name="name"
                           id="name"
                           placeholder="with a placeholder"
                           onChange={ event =>this.validate(event,"email", "email", 0)}
                           value={this.state.name}
                           onClick={this.toggle}
                    />

                </FormGroup>
                <Popover placement="right" isOpen={this.state.popoverOpen} target="name" toggle={this.toggle}>
                    <PopoverHeader>Popover Title</PopoverHeader>
                    <PopoverBody>Popover</PopoverBody>
                </Popover>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="name" toggle={this.toggletooltip}>
                    Hello world!
                </Tooltip>
            </Form>




        );
    }
}

export default InputComponent;