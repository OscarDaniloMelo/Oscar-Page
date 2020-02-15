import React from 'react'
import './Styles/BadgeEdit.css'
import Badge from '../Components/Badge'
import BadgeForm from '../Components/BadgeForm'
import PageLoading from '../Components/PageLoading'
import Logo from '../Images/warCraft_3.png'
import api from '../api'
import { Link } from 'react-router-dom'

class BadgeEdit extends React.Component{
    state={ 
        loading: true,
        error: null,
        form : {
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        twitter: '',
    } }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({loading: false, form: data})
        }
        catch(error){
            this.setState({loading: false, error: error})
        }
    }


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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
                <div className="BadgeEdit_hero">
                    <img className="BadgeEdit_image" src={Logo} alt="Logo"></img>
                    <Link className="text-decoration-none" to={"/badges"}>
                        <h2>Badges</h2>
                    </Link>
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
                        <h1>Edit Observer or Visitor</h1>
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

export default BadgeEdit