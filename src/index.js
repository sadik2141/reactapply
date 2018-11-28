import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import InputComponent from "./Components/InputComponent";
import ToastrComponent from "./Components/ToastrComponent";
import UiComponent from "./Components/UiComponent";
import FontAwesomeComponent from "./Components/FontAwesomeComponent";
import DropDownComponent from "./Components/DropDownComponent";
import AutoCompleteComponent from "./Components/AutoCompleteComponent";
import GoogleMapsComponent from "./Components/GoogleMapsComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import nmsLogo from  './assets/img/logo_netmatrix.png'

 // import ModelComponentonent from "./Components/ModelComponent";
import Ajax from "./Components/Ajax";

var service = new Ajax.Service();
var customerUrl = "control.php";
service.post('getAllDropDowns', function (d) {
    // console.log(d);
});
function getAllJobs(){
console.log("enterrrrrrrrrrr");
}
const selectData = [
    {id:0,    value:'0',       label:'selectData'},
    {id:1, value: 'chocolate', label: 'Chocolate' },
    {id:2, value: 'strawberry', label: 'Strawberry' },
    { id:3,value: 'vanilla', label: 'Vanilla' }
];
const autoSelectData=[
    { id: 'foo', label: 'foo' },
    { id: 'bar', label: 'bar' },
    { id: 'baz', label: 'baz' },
];
const menuData=[
    { id: 'Jobs', label: getAllJobs },
];
class AllComponent extends Component{
    render(){
        return(
            <div>
            <HeaderComponent logo={nmsLogo} menuData={menuData}/>
            <InputComponent
            type={"text"}
            id={"name"}
            name={"name"}
            placeholder={"Name"}
            popoverTittle={"popover"}
            popoverBody={"popoverBody"}
            tooltipMessage={"Tooltip"}
            popoverPlacement={"right"}
            tooltipPlacement={"right"}
            popoverflag={false}
            tooltipflag={false}
            validateType={"length"}
            styless={{width:"100%"}}
            classess="col"
            // val={"test"}
            />

            <DropDownComponent selectData={selectData}/>
            <ToastrComponent messages="Toastrmessage" mestype="info"/>
            <AutoCompleteComponent AutoCompleteData={autoSelectData} aplaceholder="Enter Data"/>
            <GoogleMapsComponent styless={{width: '20%'}} gPlaceholder={"Google Location"}/>
            <FooterComponent feedbackflag={true}/>
            <FontAwesomeComponent classess={"fal fa-camera-retro"} size={"2x"} name={"rocket"}/>
            </div>
        );
}
}
ReactDOM.render(<AllComponent />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
