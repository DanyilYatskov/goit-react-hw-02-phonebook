import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Input from './Input/';
import Button from './Button/';
import Section from '../Section';
//import styles from './section.module.scss';

class Form extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
  };

  state = {
    contacts: this.props.contacts,
    name: this.props.name,
  };
  render() {
    return (
      <div>
        <Section title="Phonebook">
          <Input />
        </Section>
      </div>
    );
  }
}

export default Form;
