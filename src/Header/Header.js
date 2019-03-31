import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMenu: false
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e){
        e.preventDefault();
        this.setState((prevState, props) => ({
            showMenu: !prevState.showMenu
        }));
    }

    render(){

        const menuOpac = this.state.showMenu ? 0.8 : 0;
        const menuVisib = this.state.showMenu ? "visible" : "hidden";
        const menuZIndex = this.state.showMenu ? 0 : -1;
        const menuIcon = this.state.showMenu ? "times" : "bars";

        return (
            <div className="header">
                <div className="menu" style={{opacity: menuOpac, visibility: menuVisib, zIndex: menuZIndex}}>
                    <ul className="menu-items">
                        <a href="#" className="menu-item"><li>our services</li></a>
                        <a href="#" className="menu-item"><li>about us</li></a>
                        <a href="#" className="menu-item"><li>how we work</li></a>
                        <a href="#" className="menu-item"><li>bespoke furniture</li></a>
                        <a href="#" className="menu-item"><li>contact us</li></a>
                        <a href="#" className="menu-item"><li>press & awards</li></a>
                        <a href="#" className="menu-item"><li>blog</li></a>
                        <a href="#" className="menu-item"><li>careers</li></a>
                    </ul>

                </div>
                <div className="logo-box" onClick={this.handleMenuClick}>
                    <img className="logo-img" src={process.env.PUBLIC_URL + "/logo.png"} alt="llidesign"/>
                </div>
                <div className="menu-button" onClick={this.handleMenuClick}>
                    <p className="menu-text">Menu</p>
                    <i className={"fas fa-" + menuIcon + " menu-icon"}></i>
                </div>
            </div>
        );
    }
}

export default Header;