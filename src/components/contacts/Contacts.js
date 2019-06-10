import React from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
// import { STATES } from 'mongoose';
import { getContacts } from '../../Store/Actions/contactActions';

import PropTypes from 'prop-types';


class Contacts extends React.Component {

    

    componentDidMount() {
        this.props.getContacts()

    }

   

    render() {

        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className='text-danger'>Contacts </span> List
                </h1>
                {contacts.map(contact =>
                    <Contact
                        key={contact.id}
                        contact={contact}
                    
                    />

                )}
            </React.Fragment>
        );
    }
}

Contact.propTypes = {
   contacts: PropTypes.array.isRequired,
   getContacts: PropTypes.func.isRequired
}

// export default Contacts;
const mapStateToProps = (state) => ({
 contacts:state.contact.contacts

});

// const mapDispatchToProps = (dispatch) => ({
//    getContacts: () => dispatch({type: GET_CONTACT})
// });

//Now inside the connect parameters we put two things
// => first is anything that we want to map from the redux state to props in the component.
// => Second is anything we want to dispatch.

export default connect(mapStateToProps, {getContacts})(Contacts);