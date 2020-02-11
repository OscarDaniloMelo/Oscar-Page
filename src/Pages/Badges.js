import React from 'react'
import Logo from '../Images/warCraft_3.png'
import './Styles/Badges.css'
import BadgesList from '../Components/BadgesList'
import { Link } from 'react-router-dom'


class Badges extends React.Component {
    state = {
        data: [{
            id: "63c03386",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Marker",
            twitter: "DaphneyTorphy96",
            avatarUrl: "https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
            }]
    }
    render () {
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges_hero">
                        <div className="Badges_container">
                            <img className="Badges_image" src={Logo} alt="Logo"></img>
                            <h2>Badges</h2>
                        </div>
                    </div>
                </div>
                <div className="Badges_container">
                    <div className="Badges_buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>
                    <div className="Badges_list">
                        <div className="Badges_container">
                            <BadgesList badges={this.state.data} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges