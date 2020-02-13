import React from 'react'
import './Styles/BadgeNew.css'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'
import PageLoading from '../Components/PageLoading'
import Logo from '../Images/warCraft_3.png'
import api from '../api'

class BadgeNew extends React.Component{
    state={ 
        loading: false,
        error: null,
        form : {
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

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error: null })

        try {
            await api.badges.create(this.state.form)
            this.setState({ loading: false })
            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    render(){
        if (this.state.loading){
            return <PageLoading />
        }
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
                                    firstName ={this.state.form.firstName || 'FIRST_NAME'}
                                    lastName ={this.state.form.lastName || 'LAST_NAME'}
                                    jobTitle ={this.state.form.jobTitle || 'JOB_TITLE'}
                                    twitter ={this.state.form.twitter || 'Twitter'}
                                    email ={this.state.form.email || 'EMAIL'}
                                    avatarUrl = "http://2.gravatar.com/avatar/89d989572ab2cccb2319e7ed2c02a8e0">
                            </Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                fromValues={this.state.form}
                                error={this.state.error} 
                            />
                        </div>
                    </div>
                </div>      
            </React.Fragment>
        )
    }
}  

export default BadgeNew