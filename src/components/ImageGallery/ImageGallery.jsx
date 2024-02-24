import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.list}>
      {photos.map(photo => (
        <li key={photo.id} className={css.item} onClick={() => openModal(photo)}>
          <ImageCard photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
