import React from 'react'
import './Styles/BadgeNew.css'
import Badge from '../Components/Badges'
import Logo from '../Images/warCraft_3.png'
import Navbar from '../Components/Navbar'

class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew_hero">
                    <img className="BadgeNew_image" src={Logo} alt="Logo"></img>
                    <h2>Badges</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName = "Oscar Danilo" lastName = "Melo" jobTitle = "Frontend Developer Beginner" twitter = "oscard110" avatarUrl = "http://2.gravatar.com/avatar/89d989572ab2cccb2319e7ed2c02a8e0"></Badge>
                        </div>
                    </div>
                </div>      
            </div>
        )
    }
}  

export default BadgeNew