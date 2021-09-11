import './ImageGallery.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { Component } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    status: 'idle',
    selectedImage: null,
    showModal: false,
  };

  handleSelectImage = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.inputName;
    const nextName = this.props.inputName;

    if (prevName !== nextName) {
      this.setState({ status: 'pending' });

      axios
        .get('https://pixabay.com/api/', {
          params: {
            key: '22538110-4c245d53289541016fd72dadc',
            q: nextName,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
            page: this.page,
          },
        })
        .then(response => {
          if (response.data.totalHits !== 0) {
            const images = response.data.hits;
            return this.setState({ images, status: 'resolved' });
          }
          return Promise.reject(
            new Error(`There are no images with name "${nextName}"`),
          );
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { images, error, status } = this.state;

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
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              images={images}
              onSelect={this.handleSelectImage}
            />
          </ul>
          {this.state.selectedImage && (
            <Modal
              selectedImage={this.state.selectedImage}
              handleCloseModal={this.handleCloseModal}
            />
          )}
        </>
      );
    }
  }
}
