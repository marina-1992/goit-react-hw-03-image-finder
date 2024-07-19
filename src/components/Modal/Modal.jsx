import { Component } from 'react';
import { ModalOverlay, ModalContainer } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }
  componentWillUnmount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = e => {
    if (e.code === 'Escape' || e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };
  render() {
    const { showPicture, pictureName } = this.props;
    return (
      <ModalOverlay onClick={this.onCloseModal}>
        <ModalContainer>
          <img src={showPicture} alt={pictureName} />
        </ModalContainer>
      </ModalOverlay>
    );
  }
}
