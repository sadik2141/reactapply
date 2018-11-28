import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../App.css'
class FontAwesomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size:'',
            classes: {},
            styless:{},
            name:''
        }
    }


    render() {
        const{classes,size,styless,name}=this.props;
        return (

            <div style={{padding:"1em"}}>
                <FontAwesome
                    className={classes}
                    name={name}
                    size={size}
                />
            </div>


        );
    }
}

export default FontAwesomeComponent;
