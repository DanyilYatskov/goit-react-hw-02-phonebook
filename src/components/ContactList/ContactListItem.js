import React from 'react';
import styles from './contactListItem.module.scss';
import PropTypes from 'prop-types';
import ContactList from './ContactsList';

const ContactListItem = ({ contactName, contactNumber }) => {
  return (
    <li>
      <p className="name">
        {contactName} : {contactNumber}
      </p>
    </li>
  );
};

export default ContactListItem;

ContactListItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
};
