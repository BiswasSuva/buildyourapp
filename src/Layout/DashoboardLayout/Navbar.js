import React, { useState, useEffect } from 'react';
import { reactLocalStorage } from 'reactjs-localstorage'
import logo from "../../images/Logo.png"
import { useDispatch } from 'react-redux'
import { removeUserdata } from '../../redux/reducers/User'
import { removeBodyColor } from '../../SetBodyColor'
import { Link, useNavigate } from 'react-router-dom'
function Navbar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandle = () => {

        reactLocalStorage.remove("token")
        dispatch(removeUserdata())
        removeBodyColor({ backgroundColor: "#fff" })
        navigate("/")

    }

    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className="navbar">
            <div className="flex-v__center">
                <div className="menu-burger display-none-desktop">
                    <div className="menu-burger_1" /> <div className="menu-burger_2" />{" "}
                    <div className="menu-burger_3" />
                </div>{" "}
                <a className="logo">
                    <img src={logo} alt="Logo" className='img-fluid' style={{ height: "50px" }} />
                </a>
            </div>
            <ul className="main-menu">

                <li style={{ marginRight: "20px" }}>
                    <Link to="/profession" className="main-menu-link main-menu-link-color">
                        <i className="fas fa-magic m-t-4 m-r-8 m-l-8" />
                        Profession

                    </Link>
                </li>
                <li>
                    <Link to="/modules" className="main-menu-link">
                        Modules
                    </Link>
                </li>
                <li className='d-flex align-items-center m-l-a' style={{position: "relative", color: "#fff", marginRight: "110px"}}>
                Dark Mode/Light Mode
                    <label className="switch">
                        
                        <input type="checkbox" defaultChecked="" onClick={toggleTheme}/>
                        <span className="slider round" />
                    </label>

                    {/* <button type="button"  className="btn main-menu-link btn-big btn-success" style={{ color: "#fff" }}>Theme Colour</button> */}
                </li>
                <li style={{ marginRight: "20px" }}>
                    <button type="button" className="btn main-menu-link btn-big btn-success" style={{ color: "#fff" }}>Build App</button>
                </li>
                <li >
                    <button type="button" className="main-menu-link" onClick={logoutHandle}>
                        Logout
                    </button>
                </li>

            </ul>
            <div className="btns-action display-none-desktop">

            </div>

        </div>

    )
}

export default Navbar