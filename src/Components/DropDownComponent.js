import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';
import AutoComplete from "react-autocomplete";
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            size:'',
            classes:{},
            style:{}
        }
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }


    render() {
        const { selectedOption } = this.state;
        const{data,size,style,classes}=this.props;
        return (

            <div style={{padding:"1em",width :'20%' }} >
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    inputProps={{ style: { width: '20%'}}}
                    isMulti
                    options={options}
                    styles={{width :'20%'}}

                />
            </div>


        );
    }
}

export default DropDownComponent;
