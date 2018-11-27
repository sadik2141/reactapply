import React, { Component } from 'react';
class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedbackflag:true
        }
    }
    render() {
        const{feedbackflag}=this.props;
        return (
            <footer className="footer">
                    <div className="container fixed-bottom">
                        <div className="row">
                            <div className="col-lg-2  "></div>
                            <div className="col-lg-6 text-center green-footer-text">
                                Copyright © 2018 Net Matrix Solutions, Inc. <span>&nbsp; | &nbsp;</span>
                                {feedbackflag==true ?
                                    <a href="#">Feedback </a>
                                    :null}
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
