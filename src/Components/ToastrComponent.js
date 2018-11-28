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
            text:'',
        }
    }


    render() {
        const{mestype,messages}=this.props;

        return (
            <div style={{padding:"1em"}}>
                {(mestype==="success")?
                    <button onClick={() =>ToastStore.success(messages) }>Click me !</button>
                    :null}

                {(mestype==="error")?
                    <button onClick={() =>ToastStore.error(messages) }>Click me !</button>
                    :null}
                {(mestype==="warning")?
                    <button onClick={() =>ToastStore.warning(messages) }>Click me !</button>
                    :null}
                {(mestype==="info")?
                    <button onClick={() =>ToastStore.info(messages) }>Click me !</button>
                    :null}
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} lightBackground />
            </div>


        );
    }
}

export default ToastrComponent;
