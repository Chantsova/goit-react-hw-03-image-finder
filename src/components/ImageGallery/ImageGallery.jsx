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

  handleLoadMore = prevState => {
    this.setState({ status: 'pending' });
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.inputName;
    const nextName = this.props.inputName;

    if (prevName !== nextName) {
      this.setState({
        status: 'pending',
        page: 1,
        images: null,
      });

      api(nextName, 1)
        .then(result => {
          const images = result.images;
          const totalHits = result.totalHits;
          this.setState({
            images: images,
            totalHits: totalHits,
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    if (
      prevState.page !== this.state.page &&
      this.state.page !== 1 &&
      prevName === nextName
    ) {
      api(nextName, this.state.page)
        .then(newResult => {
          const newImages = newResult.images;
          this.setState({
            images: [...prevState.images, ...newImages],
            status: 'resolved',
          });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  render() {
    const { images, error, status, selectedImage } = this.state;
    const totalPages = this.state.totalHits / 12 - this.state.page;

    return (
      <>
        {this.state.images === null && (
          <div>
            {status === 'idle' && (
              <div className="notification">
                Please, input your searching value.
              </div>
            )}
            {status === 'pending' ? (
              <div className="loader">
                <Loader />
              </div>
            ) : (
              <div></div>
            )}
            {status === 'rejected' && (
              <h1 className="error">{error.message}</h1>
            )}
          </div>
        )}

        {this.state.images !== null && (
          <div>
            <ul className="ImageGallery">
              {status === 'resolved' && (
                <ImageGalleryItem
                  images={images}
                  onSelect={this.handleSelectImage}
                />
              )}
            </ul>

            {this.state.totalHits > 12 && totalPages > 0 ? (
              status === 'resolved' ? (
                <Button handleLoadMore={this.handleLoadMore} />
              ) : (
                <div className="loader">
                  <Loader />
                </div>
              )
            ) : (
              <div></div>
            )}

            {this.state.selectedImage && (
              <Modal
                selectedImage={selectedImage}
                handleCloseModal={this.handleCloseModal}
              />
            )}
          </div>
        )}
      </>
    );
  }
}
