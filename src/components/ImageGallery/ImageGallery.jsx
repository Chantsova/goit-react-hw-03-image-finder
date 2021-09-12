import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import api from '../api/api';

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    selectedImage: null,
    showModal: false,
    page: 1,
    totalHits: null,
  };

  handleSelectImage = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleLoadMore = event => {
    event.preventDefault();
    this.setState({ status: 'pending' });
    this.setState(images => ({ page: images.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.inputName;
    const nextName = this.props.inputName;

    if (prevName !== nextName) {
      this.setState({ page: 1 });
      this.setState({ images: null });
      this.setState({ status: 'pending' });
      const page = this.state.page;

      api(nextName, page)
        .then(images => this.setState({ images, status: 'resolved' }))
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (prevState.page !== this.state.page) {
      this.setState({ status: 'pending' });
      api(nextName, this.state.page)
        .then(newImages =>
          this.setState({
            images: [...prevState.images, ...newImages],
            status: 'resolved',
          }),
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { images, error, status, selectedImage } = this.state;

    if (status === 'idle') {
      return (
        <div className="notification">Please, input your searching value.</div>
      );
    }

    if (status === 'pending') {
      return (
        <div className="loader">
          <Loader />
        </div>
      );
    }

    if (status === 'rejected') {
      return <h1 className="error">{error.message}</h1>;
    }

    if (status === 'resolved') {
      const imagesLength = images.length;

      return (
        <>
          <div>
            <ul className="ImageGallery">
              <ImageGalleryItem
                images={images}
                onSelect={this.handleSelectImage}
              />
            </ul>
          </div>

          {imagesLength >= 12 && (
            <Button handleLoadMore={this.handleLoadMore} />
          )}

          {this.state.selectedImage && (
            <Modal
              selectedImage={selectedImage}
              handleCloseModal={this.handleCloseModal}
            />
          )}
        </>
      );
    }
  }
}
