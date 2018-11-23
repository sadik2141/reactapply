import React, { Component } from 'react';
class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (

            <footer className="footer">
                    <div className="container fixed-bottom">
                        <div className="row">
                            <div className="col-lg-2  "></div>
                            <div className="col-lg-8 text-center green-footer-text">
                                Copyright © 2018 Net Matrix Solutions, Inc. <span>&nbsp; | &nbsp;</span>
                                <a href="#">Feedback</a>
                            </div>
                            <div className="col-lg-2">
                            </div>
                        </div>
                    </div>
            </footer>

        );
    }
}

export default FooterComponent;
