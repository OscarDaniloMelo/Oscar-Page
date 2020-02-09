import React from 'react'
import "../Components/Styles/Badge.css"
import Logo from '../Images/warCraft.png'

class Badge extends React.Component{
    render(){
        return (
            <div className="Badge">
                <div className="Badge_header">
                    <img className="image" src={Logo} alt="Logo"></img>
                </div>
                <div className="Badge_section-name">
                    <img
                        className="Badge_avatar"
                        src={this.props.avatarUrl}
                        alt="Avatar">
                    </img>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>
                <div className="Badge_section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="footer">Designed for Oscar Melo</div>
            </div>
        )
    }
}

export default Badge