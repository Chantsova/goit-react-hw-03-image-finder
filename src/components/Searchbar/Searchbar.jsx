import './Searchbar.css';
import React, { Component } from 'react';
import Notiflix from 'notiflix';

export default class Searchbar extends Component {
  state = {
    inputName: '',
  };

  handleInputNameChange = event => {
    this.setState({ inputName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.inputName.trim() === '') {
      Notiflix.Notify.warning(
        'Please, input target text in the searching field',
      );
    }
    this.props.onSubmit(this.state.inputName);
    this.setState({ inputName: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form onSubmit={this.handleSubmit} className="SearchForm">
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              name="inputName"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.inputName}
              onChange={this.handleInputNameChange}
            />
          </form>
        </header>
      </>
    );
  }
}
