import React from 'react'
import './Styles/Navbar.css'
import Logo from '../Images/paperMario.png'

class Navbar extends React.Component{
    render(){
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar_brand" href="/">
                        <img className="Navbar_logo" src={Logo} alt="logo" />
                        <span className="font-weight-bold">Home</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar