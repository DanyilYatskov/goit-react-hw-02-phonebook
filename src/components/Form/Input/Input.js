import React from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ inputId, handleChange, inputName, value }) => {
  return (
    <label className={styles.label} htmlFor={inputId}>
      Name
      <input
        className={styles.input}
        type="text"
        name={inputName}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
        id={inputId}
        onChange={handleChange}
      />
    </label>
  );
};

export default Input;
