import React, { Component } from 'react';
//import logo from "../logo.svg";
import {ToastContainer, ToastStore} from 'react-toasts';
import '../App.css'
class ToastrComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:'',
            mestype: '',
            text:''
        }
    }


    render() {
        const{mestype,messages}=this.props;
        console.log(mestype+"  "+messages);
        var text="ToastStore."+mestype+'("'+messages+'")';
        console.log(text);
        return (
            <div style={{padding:"1em"}}>
                <button onClick={() => text}>Click me !</button>
                {/*<button onClick={() =>ToastStore.error("sucesssssssssssssssssssssssssssssssssssss") }>Click me !</button>*/}
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} lightBackground />
            </div>


        );
    }
}

export default ToastrComponent;
