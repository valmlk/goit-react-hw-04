import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ImageModal = ({ photo, isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <img src={photo.urls.regular} alt={photo.alt_description} width={880} />
    </Modal>
  );
};

Modal.setAppElement('#root');

export default ImageModal;
