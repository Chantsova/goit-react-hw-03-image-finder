import { Component } from 'react';
import './Button.css';
import Loader from '../Loader/Loader';

export default class Button extends Component {
  render() {
    return (
      <div className="Button__container">
        {this.props.newImages === 12 && this.props.onLoading === false && (
          <button
            className="Button"
            type="button"
            onClick={event => {
              this.props.handleLoadMore(event);
              this.props.handleOnClickLoader(event);
            }}
          >
            Load more
          </button>
        )}
        {this.props.onLoading === true && (
          <div className="loader">
            <Loader />
          </div>
        )}
      </div>
    );
  }
}
