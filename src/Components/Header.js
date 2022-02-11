import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';


export const Header = ({title, handleToggle, text, color}) => {
    // const onClick = () => {
    //     return console.log("Click")
    // }

  return (
  <header className='header'>
    <h1>{title}</h1>
    <Button handleToggle={handleToggle} color={color} text={text}/>
  </header>
  );
};

Header.defaultProps = {
    title: 'Task Tracker',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}