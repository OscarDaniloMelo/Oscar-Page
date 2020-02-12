import React from 'react'
import "../Components/Styles/Badge.css"
import Logo from '../Images/warCraft.png'
import Gravatar from './Gravatar'

class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge_header">
                    <img className="image" src={Logo} alt="Logo"></img>
                </div>
                <div className="Badge_section-name">
                    <Gravatar
                        className="Badge_avatar"
                        email={this.props.email}
                        alt="Avatar">
                    </Gravatar>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <h4>{this.props.email}</h4>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="footer">Designed for Oscar Melo</div>
            </div>
        )
    }
}

export default Badge