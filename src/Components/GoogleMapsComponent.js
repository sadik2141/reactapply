import React, { Component } from 'react';
import GoogleAutoComplete from 'react-google-autocomplete';
import '../App.css'
class GoogleMapsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classes:{},
            gPlaceholder:'',
            size:'',
            styless:{},
            formatted_address:'',
            lat:'',
            lng:''
        }
    }
    getSelectedPlace(place){
        this.setState({
            formatted_address: place.formatted_address,
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
        });
        console.log(this.state.formatted_address);
        console.log(this.state.lat);
        console.log(this.state.lng);
    }

    render() {
        const{classes,gPlaceholder,size,styless}=this.props;
        return (

            <div style={{padding:"1em"}}>
                <GoogleAutoComplete
                    placeholder={gPlaceholder}
                    style={styless}
                    onPlaceSelected={(place) => {
                        this.getSelectedPlace(place);
                    }}
                    types={['(regions)']}
                    // componentRestrictions={{country: "ru"}}
                />
            </div>


        );
    }
}

export default GoogleMapsComponent;
