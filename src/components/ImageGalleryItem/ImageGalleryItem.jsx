import './ImageGalleryItem.css';

const ImageGalleryItem = ({ images, onSelect }) =>
  images.map(({ id, webformatURL, largeImageURL }) => (
    <li
      className="ImageGalleryItem"
      key={id}
      onClick={() => onSelect(largeImageURL)}
    >
      <img src={webformatURL} alt={id} className="ImageGalleryItem-image" />
    </li>
  ));

export default ImageGalleryItem;
