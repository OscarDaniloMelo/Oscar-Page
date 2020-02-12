import React from "react";
import { Link } from "react-router-dom";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return(
        <div>
          <h3>NoT Found Information </h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create New Badge
          </Link>
        </div>
      )
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <p>
                {badge.firstName} {badge.lastName}
              </p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
