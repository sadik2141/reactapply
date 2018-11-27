import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import HeaderComponenet from 'HeaderComponent';

class ModalComponent extends Component{
    constructor(){
        super();
        this.state={
            open:false
        }
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div >
                <button onClick={this.onOpenModal}>Open modal</button>
                <HeaderComponenet/>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                        hendrerit risus, sed porttitor quam.
                    </p>
                </Modal>
            </div>
        );
    }

}
export default ModalComponent;