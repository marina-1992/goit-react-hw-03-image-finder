import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getAllImages } from './../API/images';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    searchImg: '',
    page: 1,
    serchArray: [],
    isShowModal: false,
    showPicture: '',
    totalSearchItems: 0,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchImg, page } = this.state;
    if (prevState.searchImg !== searchImg || prevState.page !== page) {
      if (!searchImg) {
        Notiflix.Report.info('Fill in the search param!');
        return;
      }
      this.setState({ loading: true });
      getAllImages(searchImg, page)
        .then(data =>
          this.setState({
            serchArray:
              page === 1 ? data.hits : [...prevState.serchArray, ...data.hits],
            totalSearchItems: data.totalHits,
          })
        )
        .catch(error => Notiflix.Report.failure(error.message))
        .finally(() => this.setState({ loading: false }));
    }
  }
  searchSubmit = searchImg => {
    this.setState({ searchImg: searchImg, page: 1 });
  };

  morePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  showModal = largePicture => {
    this.setState({ isShowModal: true, showPicture: largePicture });
  };
  closeModal = () => {
    this.setState({ isShowModal: false, showPicture: '' });
  };

  render() {
    const {
      searchImg,
      serchArray,
      isShowModal,
      showPicture,
      totalSearchItems,
      loading,
    } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.searchSubmit} />
        {serchArray.length > 0 && (
          <ImageGallery
            serchArray={serchArray}
            pictureName={searchImg}
            showModal={this.showModal}
          />
        )}

        {loading && <Loader />}
        {serchArray.length !== totalSearchItems && (
          <Button morePage={this.morePage} />
        )}
        {isShowModal && (
          <Modal
            showPicture={showPicture}
            pictureName={searchImg}
            closeModal={this.closeModal}
          />
        )}
      </>
    );
  }
}
