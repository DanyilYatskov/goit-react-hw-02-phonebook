import React from 'react';
import styles from './contactListItem.module.scss';
import PropTypes from 'prop-types';
import ContactList from './ContactsList';

const ContactListItem = ({ contactName }) => {
  return (
    <li>
      <p className="name">{contactName}</p>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
};
