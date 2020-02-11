import React from 'react'
import './Styles/BadgeNew.css'
import Badge from '../Components/Badges'
import BadgeForm from '../Components/BadgeForm'
import Logo from '../Images/warCraft_3.png'

class BadgeNew extends React.Component{
    state={ form : {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } }

    handleChange = e => {
        this.setState({
            form: {
                ... this.state.form,
                [e.target.name]: e.target.value,
            }
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="BadgeNew_hero">
                    <img className="BadgeNew_image" src={Logo} alt="Logo"></img>
                    <h2>Badges</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge  
                                    firstName ={this.state.form.firstName}
                                    lastName ={this.state.form.lastName}
                                    jobTitle ={this.state.form.jobTitle}
                                    twitter ={this.state.form.twitter}
                                    email ={this.state.form.email}
                                    avatarUrl = "http://2.gravatar.com/avatar/89d989572ab2cccb2319e7ed2c02a8e0">
                            </Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                fromValues={this.state.form} 
                            />
                        </div>
                    </div>
                </div>      
            </React.Fragment>
        )
    }
}  

export default BadgeNew