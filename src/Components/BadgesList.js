import React from "react";
import { Link } from "react-router-dom";
import Gravatar from './Gravatar'
import './Styles/BadgesList.css'

class BadgesList extends React.Component {
  render() {
    // if (this.props.badges.length === 0) {
    //   return(
    //     <div>
    //       <h3>NoT Found Information </h3>
    //       <Link className="btn btn-primary" to="/badges/new">
    //         Create New Badge
    //       </Link>
    //     </div>
    //   )
    // }
    return (
      <div className="BadgesListItem">
        <Gravatar 
          className="BadgesListItem_avatar"
          email={this.props.badge.email}
        />

        <div>
        <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />{this.props.badge.email}
          <br />{this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

export default BadgesList;
