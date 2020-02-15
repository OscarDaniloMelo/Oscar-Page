import React from 'react'
import Badge from '../Components/Badge'
import { Link } from 'react-router-dom'
import DeleteBadgeModal from '../Components/DeleteBadgeModal'

function BadgeDetails(props) {
    const badge = props.badge
    return (
        <div>
        <div className="BadgeDetails_hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img></img>
              </div>
              <div className="col-6">
                <h1>{badge.firstName} {badge.lastName}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <Badge 
                        firstName={badge.firstName}
                        lastName={badge.lastName}
                        email={badge.email}
                        twitter={badge.twitter}
                        jobTitle={badge.jobTitle}
                    />
                </div>
                <div className="col-6">
                    <h2>Actions</h2>
                    <div>
                        <div>
                            <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary mr-4" >
                                Edit
                            </Link>
                            <button onClick={props.onOpenModal} className="btn btn-danger"> Delete</button>
                            <DeleteBadgeModal 
                              isOpen={props.modalIsOpen} 
                              onClose={props.onCloseModal} 
                              onClose={props.onCloseModal} 
                              onDeleteBadge={props.onDeleteBadge} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}

export default BadgeDetails