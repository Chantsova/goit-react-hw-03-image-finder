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
    page: 1,
    totalHits: null,
    newImages: null,
    onLoading: false,
  };

  handleSelectImage = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  handleOnClickLoader = () => {
    this.setState({ onLoading: true });
  };

  smoothScroll() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.inputName;
    const nextName = this.props.inputName;

    if (prevName !== nextName) {
      this.setState({
        status: 'pending',
        page: 1,
        images: null,
        newImages: null,
      });

      api(nextName, 1)
        .then(result => {
          const images = result.images;
          const totalHits = result.totalHits;
          this.setState({
            images: images,
            totalHits: totalHits,
            status: 'resolved',
            newImages: images.length,
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (
      prevState.page !== this.state.page &&
      this.state.page !== 1 &&
      prevName === nextName
    ) {
      this.setState({
        newImages: null,
      });

      api(nextName, this.state.page)
        .then(newResult => {
          const newImages = newResult.images;
          this.setState({
            images: [...prevState.images, ...newImages],
            status: 'resolved',
            newImages: newImages.length,
            onLoading: false,
          });
        })
        .then(this.smoothScroll)
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, status, selectedImage, onLoading, newImages } = this.state;
    return (
      <>
        <div>
          {' '}
          {status === 'pending' && (
            <div className="loader">
              <Loader />
            </div>
          )}
          {this.state.status === 'rejected' && (
            <h1 className="error">{this.state.error.message}</h1>
          )}
          {status === 'resolved' && (
            <ul className="ImageGallery">
              <ImageGalleryItem
                images={images}
                onSelect={this.handleSelectImage}
              />
            </ul>
          )}
        </div>

        <div>
          <Button
            handleLoadMore={this.handleLoadMore}
            handleOnClickLoader={this.handleOnClickLoader}
            onLoading={onLoading}
            status={status}
            newImages={newImages}
          />
        </div>

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
