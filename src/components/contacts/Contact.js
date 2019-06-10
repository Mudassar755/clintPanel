import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {deleteContact} from '../../Store/Actions/contactActions';
import propTypes from 'prop-types'

class Contact extends React.Component {

    state = {
        showContactInfo: true,
    };
 
    onDeleteClick = (id) => {
       this.props.deleteContact(id)
    }
  

    render() {
        // No#1  const { name, email, address } = this.props; 
        //No#2 const { contact } = this.props; 

        const { id, name, email, phone } = this.props.contact;

        const { showContactInfo } = this.state;

        return (
           

                  
                        <div className='card card-body mb-3'>
                            <h4>{name} <i onClick={() => this.setState({
                                showContactInfo: !this.state.showContactInfo
                            })}
                                className="fas fa-sort-down"
                                style={{ cursor: 'pointer' }}
                            />

                                <i
                                    onClick={this.onDeleteClick}
                                    className="fas fa-times"
                                    style={{ cursor: 'pointer', float: 'right', color: 'red' }}
                                    onClick = {this.onDeleteClick.bind(this, id)}
                                />
                                <Link to={`/contact/edit/${id}`}>
                                  
                                    <i className='fas fa-pencil-alt'
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'black',
                                            marginRight: '1rem',
                                        }}
                                        
                                    />
                                </Link>
                            </h4>
                            {showContactInfo ? (<ul className='list-group'>
                                <li className='list-group-item'>Email: {email}</li>
                                <li className='list-group-item'>Phone: {phone}</li>

                            </ul>) : null}


                        </div>

                   
        );
    }
}

Contact.propTypes = {
    contact: propTypes.object.isRequired,
    deleteContact: propTypes.func.isRequired,
}
export default connect(null, { deleteContact } )(Contact);