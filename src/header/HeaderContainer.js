import React from "react";
import { Link } from "react-router-dom";

import { withToggler } from "atom-lib";

import Navbar from './Navbar';
import ToggleMenu from "./ToggleMenu";
import logoCopy from "../assets/img/logo_transparent_copy.png";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";


function HeaderContainer({ toggle, on }) {
    return (
        <div>
            <AppBar style={{backgroundColor: "#1D1D1F"}}>
                <ToolBar style={{display: "flex", justifyContent: "space-between"}}>
                    <div onClick={on ? toggle : null} className="logo">
                        <Link to="/">
                            <img className="logo" src={logoCopy} alt=""/>
                        </Link>
                    </div>
                    <ToggleMenu toggle={toggle} on={on}/>
                </ToolBar>
            </AppBar>
            <div>
                <Navbar toggle={toggle} on={on}/>
            </div>
        </div>
        
    )
}

export default withToggler({ on: false })(HeaderContainer);