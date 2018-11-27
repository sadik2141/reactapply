import React, { Component } from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import '../App.css'
class GoogleMapsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes:{},
            type: '',
            Placeholder:'',
            size:'',
            styless:{}
        }
    }

    render() {
        const{type,classes,Placeholder,size,styless}=this.props;
        return (

            <div style={{padding:"1em"}}>
                <GoogleAutoComplete
                    style={{width: '20%'}}
                    onPlaceSelected={(place) => {
                    }}
                    types={['(regions)']}
                    // componentRestrictions={{country: "ru"}}
                />
            </div>


        );
    }
}

export default GoogleMapsComponent;
