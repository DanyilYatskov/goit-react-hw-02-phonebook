import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ name }) => {
  return (
    <button className={styles.button} type="Submit">
      {name}
    </button>
  );
};

export default Button;
