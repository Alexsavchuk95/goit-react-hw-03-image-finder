import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.module.css';

export default class SearchForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({
      value: '',
    });
  };

  render() {
    const { value } = this.state;
    return (
      <form className={style.SearchForm} onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          type="text"
          value={value}
          placeholder="Search images..."
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
