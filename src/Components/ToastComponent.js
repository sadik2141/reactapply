import React, { Component } from 'react';
//import logo from "../logo.svg";
import {ToastContainer, ToastStore} from 'react-toasts';
import '../App.css'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
class ToastComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message:'',
            type: '',
        }
    }

    // notify = () => {
    //     toast("Default Notification !");
    //
    //     toast.success("Success Notification !", {
    //         position: toast.POSITION.TOP_CENTER
    //     });
    //
    //     toast.error("Error Notification !", {
    //         position: toast.POSITION.TOP_LEFT
    //     });
    //
    //     toast.warn("Warning Notification !", {
    //         position: toast.POSITION.BOTTOM_LEFT
    //     });
    //
    //     toast.info("Info Notification !", {
    //         position: toast.POSITION.BOTTOM_CENTER
    //     });
    //
    //     toast("Custom Style Notification with css class!", {
    //         position: toast.POSITION.BOTTOM_RIGHT,
    //         className: 'foo-bar'
    //     });
    // };

    render() {
        const{type,message}=this.props;
        return (

            <div style={{padding:"1em"}}>
                <button onClick={() => ToastStore.success("There is an sucess :'(")}>Click me !</button>
                <ToastContainer store={ToastStore} position={ToastContainer.POSITION.TOP_CENTER} lightBackground />

                {/*<button onClick={this.notify}>Notify</button>;*/}
                {/*<ToastContainer />*/}
            </div>


        );
    }
}

export default ToastComponent;
