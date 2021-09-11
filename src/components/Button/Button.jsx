import { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  HandleOnClick() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    return (
      <button
        className="Button"
        type="button"
        onClick={this.props.handleLoadMore}
        onSubmit={this.HandleOnClick}
      >
        Load more
      </button>
    );
  }
}
