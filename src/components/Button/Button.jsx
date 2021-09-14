import './Button.css';
import Loader from '../Loader/Loader';

const Button = ({ onLoading, newImages, handleLoadMore }) => {
  return (
    <div className="Button__container">
      {newImages === 12 && onLoading === false && (
        <button className="Button" type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
      {onLoading === true && (
        <div className="loader">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Button;
