import {
  Image,
  ImageItem,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  picture,
  pictureName,
  showModal,
  largePicture,
}) => {
  return (
    <ImageItem>
      <Image
        src={picture}
        alt={pictureName}
        onClick={() => showModal(largePicture)}
      />
    </ImageItem>
  );
};
