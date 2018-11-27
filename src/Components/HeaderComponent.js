import React, { Component } from 'react';
class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logo:'',
            menuData: [],
        }
    }
    render() {
        const{logo,menuData}=this.props;
        // console.log(menuData+"asad");
        // let menu = this.props.menuData.map(function (a) {
        //     return { id: a.id, label: a.label };
        // })
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"75px"}}>
                <div className="container">
                    <div className="navbar-header page-scroll">
                <a className="navbar-brand page-scroll" href="#">
                    <img src={logo}/>
                </a>
                    </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-right" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " >
                        <li className="nav-item active">
                            <a className="nav-link navbar-right" href="#">Jobs </a>
                        </li>

                    </ul>
                </div>
                </div>
            </nav>

        );
    }
}

export default HeaderComponent;
