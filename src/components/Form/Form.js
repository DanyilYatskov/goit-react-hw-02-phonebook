import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import Input from './Input/';
import Button from './Button/';
import Section from '../Section';
import styles from './form.module.scss';

class Form extends Component {
  static defaultProps = {
    contacts: [],
    name: '',
  };

  state = {
    contacts: this.props.contacts,
    name: this.props.name,
  };
  nameInputId = uuidv4();
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  addContact = ({ name }) => {
    const contact = {
      id: uuidv4(),
      name: name,
    };

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
  handleSubmit = event => {
    event.preventDefault();

    this.addContact(this.state);

    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <form className="TodoEditor" onSubmit={this.handleSubmit}>
            <Input
              inputName="name"
              value={name}
              inputId={this.nameInputId}
              handleChange={this.handleChange}
            />
            <Button name="Add Contact" />
          </form>
        </Section>
      </>
    );
  }
}

export default Form;
