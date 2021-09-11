import './App.css';
import React, { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';

export default class App extends Component {
  state = {
    inputName: '',
  };

  handleSearchFormSubmit = inputName => {
    this.setState({ inputName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />
        <div className="content">
          <ImageGallery inputName={this.state.inputName} />
        </div>
      </>
    );
  }
}
