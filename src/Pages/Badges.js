import React from 'react'
import Logo from '../Images/warCraft_3.png'
import './Styles/Badges.css'
import BadgesList from '../Components/BadgesList'
import PageLoading from '../Components/PageLoading'
import PageError from '../Components/PageError'
import { Link } from 'react-router-dom'
import api from '../api'


class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    } 

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({loading: true, error: null})

        try {
            const data = await api.badges.list()
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render () {
        if (this.state.loading) {
            return <PageLoading />
        }
        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
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