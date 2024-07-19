import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

// import { ImageGalleryList } from '.components/ImageGallery.styled';
import { ImageGalleryList } from 'components/ImageGallery/ImageGallery.styled';

export const ImageGallery = ({ serchArray, pictureName, showModal }) => {
  return (
    <ImageGalleryList>
      {serchArray.map(el => (
        <ImageGalleryItem
          key={el.id}
          picture={el.webformatURL}
          pictureName={pictureName}
          largePicture={el.largeImageURL}
          showModal={showModal}
        />
      ))}
    </ImageGalleryList>
  );
};
