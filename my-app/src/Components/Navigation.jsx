import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

// Navigation of App
const Navigation = ({path, text}) => {
    return (
        <div className="navigation">
      <NavLink className="main-nav-item" to={path}>
        <button className="neumorphismLight">{text}</button>
      </NavLink>
      </div>
    );
};

Navigation.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }

export default Navigation;