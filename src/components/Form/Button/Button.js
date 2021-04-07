import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = onClickHandler => {
  return (
    <button className={styles.button} type="button" onClick={onClickHandler}>
      Add Contact
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};
