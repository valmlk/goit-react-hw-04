import css from './ImageCard.module.css';

const ImageCard = ({ photo }) => {
  return (
    <div className={css.wrapper}>
      <img src={photo.urls.small} alt={photo.alt_description} className={css.image} />
    </div>
  );
};

export default ImageCard;
