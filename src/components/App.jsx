import { fetchPhotos } from '../api';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';
import ImageModal from './ImageModal/ImageModal';

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const searchPhotos = async newQuery => {
    setQuery(`${Date.now()}/${newQuery}`);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function searchPhotos() {
      try {
        setError(false);
        setLoading(true);

        const fetchedPhotos = await fetchPhotos(query.split('/')[1], page);

        setPhotos(prevPhotos => [...prevPhotos, ...fetchedPhotos]);
      } catch (error) {
        setError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    }

    searchPhotos();
  }, [query, page]);

  const openModal = photo => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div>
      <Toaster position="bottom-right" reverseOrder={false} />
      <SearchBar onSearch={searchPhotos} />
      {error && <b>Oops, something went wrong</b>}
      {photos.length > 0 && <ImageGallery photos={photos} openModal={openModal} />}
      {loading && <Loader />}
      {photos.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {modalIsOpen && (
        <ImageModal photo={selectedPhoto} isOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
