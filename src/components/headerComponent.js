import React from 'react';
import { NavLink } from 'react-router-dom';
import VideogameAssetOutlinedIcon from '@material-ui/icons/VideogameAssetOutlined';
import DehazeIcon from '@material-ui/icons/Dehaze';


class HeaderComponent extends React.Component {

    render = () => {
        return (
            <div className="header">
                <NavLink className="navbar-brand" to="/">
                    <div className="logo font-24">
                        <span>eSteem</span>
                        <VideogameAssetOutlinedIcon fontSize="large" className="pl-5" />
                    </div>
                </NavLink>

                <div className="menu-link-div">
                    <NavLink to="/" className="menu-bar-link">Home</NavLink>
                    <NavLink to="/games" className="menu-bar-link">Games</NavLink>
                    <NavLink to="/about" className="menu-bar-link">About</NavLink>
                </div>
                <div className="login-div">
                    <NavLink to="/login" className="menu-bar-link">Login</NavLink>
                </div>
                <div className="login-div">
                    <DehazeIcon fontSize="large" className="pl-5" />
                </div>
                
            </div>
        );
    };

}

export default HeaderComponent;




