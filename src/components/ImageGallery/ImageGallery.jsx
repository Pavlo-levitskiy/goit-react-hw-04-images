import { Gallery } from './ImageGallery.styled';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, toggleLargeMode }) => {
  return (
    <Gallery>
      {images.map(({ id, largeImageURL, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            preview={webformatURL}
            url={largeImageURL}
            alt={tags}
            toggleLargeMode={toggleLargeMode}
          />
        );
      })}
    </Gallery>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  toggleLargeMode: PropTypes.func,
};