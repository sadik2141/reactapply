import React, { Component } from 'react';
import AutoComplete from 'react-autocomplete';
import '../App.css';

class AutoCompleteComponent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            value: '',
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
                    this.setState({ value: event.target.value })
                    console.log("text validate sucess");
                } else {
                    this.setState({value:event.target.value})
                    console.log("text validate false");
                }
                break;
            case "email":
                if (this.verifyEmail(event.target.value)) {
                    this.setState({value:event.target.value})
                    console.log("email validate sucess");
                } else {
                    this.setState({value:event.target.value})
                    console.log("email validate false");
                }
                break;
            case "int":
                if (this.veritfyInt(event.target.value)) {
                    this.setState({value:event.target.value})
                    console.log("int validate sucess");
                } else {
                    this.setState({value:event.target.value})
                    console.log("int validate false");
                }
                break;
            default:
                break;
        }
    }

    render() {
        const{data,placeholder}=this.props;
        return (
            <div style={{padding:"1em"}} >
            <AutoComplete
                items={[
                    { id: 'foo', label: 'foo' },
                    { id: 'bar', label: 'bar' },
                    { id: 'baz', label: 'baz' },
                ]}
                shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
                getItemValue={item => item.label}
                renderItem={(item, highlighted) =>
                    <div
                        key={item.id}
                        style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
                    >
                        {item.label}
                    </div>
                }
                inputProps={{ style: { width: '100%'}, placeholder: 'test'}}
                value={this.state.value}
                onChange={ event =>this.validate(event,"text", "length", 0)}
                onSelect={value => this.setState({ value })}
            />
            </div>
        );
    }

}

export default AutoCompleteComponent;