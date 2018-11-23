import React, { Component } from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import '../App.css'
class GoogleAutoCompleteComponent extends Component {
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
                <GoogleAutoComplete
                    style={{width: '20%'}}
                    onPlaceSelected={(place) => {
                        console.log(place);
                    }}
                    types={['(regions)']}
                    // componentRestrictions={{country: "ru"}}
                />
            </div>


        );
    }
}

export default GoogleAutoCompleteComponent;
