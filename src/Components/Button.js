import React from 'react';
import PropTypes from 'prop-types';


export const Button = ({color, text, handleToggle}) => {

  return (
    <button onClick={handleToggle} style={{backgroundColor: color}} className='btn'>
        {text}
    </button>);
};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    handleChange: PropTypes.func,
}

// used handleChange for onClick