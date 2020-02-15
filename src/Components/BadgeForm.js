import React from 'react'

class BadgeFrom extends React.Component{
    // state={}

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // }
    handleClick = (e) => {
        console.log("button was clicked")
    }
    // handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log("form was submitted")
    // }

    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit}>
                    <div className="from-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="firstName" 
                            value={this.props.fromValues.firstName} 
                        />
                    </div>
                    <div className="from-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="lastName" 
                            value={this.props.fromValues.lastName} 
                        />
                    </div>
                    <div className="from-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="email" 
                            name="email" 
                            value={this.props.fromValues.email} 
                        />
                    </div>
                    <div className="from-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="jobTitle" 
                            value={this.props.fromValues.jobTitle} 
                        />
                    </div>
                    <div className="from-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="twitter"
                            value={this.props.fromValues.twitter} 
                        />
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">
                        Save
                    </button>

                    {this.props.error && <p className="text-danger">{this.props.error.message}</p>}
                </form>
            </div>
        )
    }
}

export default BadgeFrom