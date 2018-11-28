import React, { Component } from 'react';
import { Popover, PopoverHeader, PopoverBody, Form, FormGroup, Input ,Tooltip } from 'reactstrap';
import {validate} from "./Common";
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
            styless:{},
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
            validateType:'',
            value:''

        }
        this.toggletooltip = this.toggletooltip.bind(this)
        this.toggle = this.toggle.bind(this)

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

    // componentDidUpdate (){
    //     this.setState({name:this.state.value});
    // }
    render() {
        const{type,placeholder,id,name,size,styless,classes,popoverTittle,popoverBody,tooltipMessage,
              popoverPlacement, tooltipPlacement,popoverflag,tooltipflag,validateType}=this.props;
        return (
            <Form inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Input type={type}
                           name={name}
                           id={id}
                           placeholder={placeholder}
                           onChange={event => validate(event,id,validateType,0)}
                             // value={''}
                            onClick={this.toggle}
                           style={styless}
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