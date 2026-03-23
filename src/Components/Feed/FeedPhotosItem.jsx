import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../Helper/Image';
import { useNavigate } from 'react-router-dom';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  const navigate = useNavigate();

  function handleClick() {
    if (photo && photo.id) {
      if (setModalPhoto) {
        setModalPhoto(photo);
      } else {
        navigate(`/foto/${photo.id}`);
      }
    }
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
