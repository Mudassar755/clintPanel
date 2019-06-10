import React, { Component } from 'react';
// import { Consumer } from '../../Context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import { editContact } from '../../Store/Actions/contactActions';
import { connect } from 'react-redux'

class EditContact extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }
    // [e.target.name] will target the 'name' attribute of * input
    // onChange = (e) => this.setState({ [e.target.name]: e.target.value })

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

        const updatedContact = {
            name,
            email,
            phone,
        };
        this.props.editContact(updatedContact);

        
        //Clear The State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });
        
        this.props.history.push('/')
    };
    
    componentDidMount() {
        const { id } = this.props.match.params;
        const edit = this.state;
        console.log(id, edit);
       
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        const { name, email, phone, errors} = this.state;

       
                    return (
                        <div className='card mb-3'>
                            <div className='card-header'>Edit Contact</div>
                            <div className='card-body'>
                                <form onSubmit={this.onSubmit.bind(this)}>

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



                                    <input
                                     type='submit' 
                                     value='Update Contact' 
                                     className='btn btn-block btn-light' 
                                     />
                                </form>
                            </div>
                        </div>
                
        );

    }
}

export default connect(null, { editContact })(EditContact);