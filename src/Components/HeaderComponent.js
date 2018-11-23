import React, { Component } from 'react';
import nmsLogo from  '../assets/img/logo_netmatrix.png'
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo:'',
            menu: {},
        }
    }
    render() {
        const{logo,menu}=this.props;
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"75px"}}>
                <div className="container">
                    <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#">
                    <img src={nmsLogo}/>
                </a>
                    </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " >
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>

                    </ul>
                </div>
                </div>
            </nav>

        );
    }
}

export default HeaderComponent;
