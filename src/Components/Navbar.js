import React from 'react'
import './Styles/Navbar.css'
import Logo from '../Images/paperMario.png'
import {Link} from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar_brand" to="/">
                        <img className="Navbar_logo" src={Logo} alt="logo" />
                        <span className="font-weight-bold">Home</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar