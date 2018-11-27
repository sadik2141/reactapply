import React, { Component } from 'react';
import Select from 'react-select';
import '../App.css';

class DropDownComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            defValue: 0,
            size:'',
            selectData:{},
            classes:{},
            style:{},
        }
    }
    setSelected = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    // componentDidMount() {
    //     if (this.props.staticData === null || this.props.staticData === undefined) {
    //         this.getData();
    //     } else {
    //         this.setState({
    //             selectData: this.props.staticData
    //         });
    //     }
    // }
    render() {
        const { selectedOption } = this.state;
        const{selectData,size,style,classes,defultval}=this.props;
        let options = this.props.selectData.map(function (a) {
            return {id:a.id ,value: a.value, label: a.label };
        })
        return (

            <div style={{padding:"1em",width :'20%' }} >
                <Select
                    value={selectedOption}
                    onChange={this.setSelected}
                    // inputProps={{ style: { width: '20%'}}}
                    options={options}
                    // styles={{width :'20%'}}

                />
            </div>
        );
    }
}

export default DropDownComponent;
