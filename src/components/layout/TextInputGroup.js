import React  from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const TextInputGroup = ({
    label,
    name,
    value,
    placeholder,
    type,
    onChange,
    error,
}) => {
    return (

        <div className='form-group'>
        <label htmlFor={name}>{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            //call classnames func from lib in 1st param it will takes classes will implemnt directly in 2nd param we put the class whis will be conditional 
            className= {classnames( 'form-control form-control-lg', { 
                'is-invalid': error
            })}
            value={value}
            onChange={onChange}
        />
        {error && <div className = "invalid-feedback">{error}</div>}
    </div>
    )
};

TextInputGroup.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    // error: propTypes.string.isRequired,


}

TextInputGroup.defaultProps = {
    type: 'text',
}

export default TextInputGroup;