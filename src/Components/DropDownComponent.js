import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            size:'',
            selectData:{},
            classes:{},
            styless:{},
        }
    }
    setSelected = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    componentDidMount() {
const{selectData}=this.props;
this.setState({selectedOption:selectData[0]});
    }
    render() {
        const { selectedOption } = this.state;
        const{selectData,size,styless,classes}=this.props;
        // let options = this.props.selectData.map(function (a) {
        //     return {id:a.id ,value: a.value, label: a.label };
        // })
        return (

            <div style={{padding:"1em",width :'20%' }} >
                <Select
                    value={selectedOption}
                    onChange={this.setSelected}
                    options={selectData}
                    style={styless}
                />
            </div>
        );
    }
}

export default DropDownComponent;
