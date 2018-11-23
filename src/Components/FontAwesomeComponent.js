import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../App.css'
class FontAwesomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'',
            type: '',
        }
    }


    render() {
        const{type,message}=this.props;
        return (

            <div style={{padding:"1em"}}>
                <FontAwesome
                    className='fal fa-camera-retro'
                    name='rocket'
                    size='2x'
                />
            </div>


        );
    }
}

export default FontAwesomeComponent;
