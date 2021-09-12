import './ImageGalleryItem.css';
import { v4 as uuidv4 } from 'uuid';

const ImageGalleryItem = ({ images, onSelect }) =>
  images.map(({ id, webformatURL, largeImageURL }) => (
    <li
      className="ImageGalleryItem"
      key={uuidv4()}
      onClick={() => onSelect(largeImageURL)}
    >
      <img src={webformatURL} alt={id} className="ImageGalleryItem-image" />
    </li>
  ));

export default ImageGalleryItem;
