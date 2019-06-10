import React, { Component } from 'react';
import propTypes from 'prop-types';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from 'react-redux';
import { addContact } from '../../Store/Actions/contactActions';

class AddContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    // [e.target.name] will target the 'name' attribute of * input
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {

        e.preventDefault();

        const { name, email, phone } = this.state;

        //Check Error

        if(name === ''){
            this.setState({
                errors: {name: 'Name is required'}
            })
            return;
        }

        if(email === ''){
            this.setState({
                errors: {email: 'Email is required'}
            })
            return;
        }

        if(phone === ''){
            this.setState({
                errors: {phone: 'Phone is required'}
            })
            return;
        }


        const newContact = {
            id: uuid(),    //generate unique id
            name,
            email,
            phone,
        };


       this.props.addContact(newContact);

        //Clear The State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });

        this.props.history.push('/')
    };

    render() {
        const { name, email, phone, errors} = this.state;

       
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Add Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit}>

                                    <TextInputGroup
                                        label="Name"
                                        name='name'
                                        placeholder="Enter Name ..."
                                        value={name}
                                        onChange={this.onChange}
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        name='email'
                                        type='email'
                                        placeholder="Enter Email ..."
                                        value={email}
                                        onChange={this.onChange}
                                        error={errors.email}
                                    />

                                    <TextInputGroup
                                        label="Phone"
                                        name='phone'
                                        placeholder="Enter Phone ..."
                                        value={phone}
                                        onChange={this.onChange}
                                        error={errors.phone}
                                    />



                                    <input type='submit' value='Add Contact' className='btn btn-block btn-light' />
                                </form>
                            </div>
                        </div>
              
        );

    }
}

AddContact.propTypes = {
    addContact: propTypes.func.isRequired,
}

export default connect( null,{ addContact })(AddContact);