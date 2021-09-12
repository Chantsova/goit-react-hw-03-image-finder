import { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <div className="Button__container">
        <button
          className="Button"
          type="button"
          onClick={this.props.handleLoadMore}
        >
          Load more
        </button>
      </div>
    );
  }
}
