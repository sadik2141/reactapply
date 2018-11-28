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

        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height:"75px"}}>
                <div className="container">
                    <div className="navbar-header page-scroll">
                <span className="navbar-brand page-scroll" >
                    <img src={logo}/>
                </span>
                    </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse navbar-right" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 " style={{padding:"700px"}}>
                        {
                            menuData.map(m=>(
                                <li  key= {m.id} className="nav-item active">
                                    <span className="nav-link navbar-right" style={{cursor: "pointer"}} onClick={m.label}>{m.id }</span>
                                    {/*<a className="nav-link navbar-right" onClick={m.label}  href="#">{m.id }</a>*/}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                </div>
            </nav>

        );
    }
}

export default HeaderComponent;
