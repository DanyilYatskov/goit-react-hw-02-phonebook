import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import Input from './Input/';
import Button from './Button/';
import Section from '../Section';
import styles from './form.module.scss';

class Form extends Component {
  static defaultProps = {
    name: '',
  };

  state = {
    name: this.props.name,
  };
  nameInputId = uuidv4();
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.setState({ name: '' });
  };
  render() {
    const { name } = this.state;
    return (
      <form className="TodoEditor" onSubmit={this.handleSubmit}>
        <Input
          inputName="name"
          value={name}
          inputId={this.nameInputId}
          handleChange={this.handleChange}
        />
        <Button name="Add Contact" />
      </form>
    );
  }
}

export default Form;
