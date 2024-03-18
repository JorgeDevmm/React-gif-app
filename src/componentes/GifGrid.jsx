import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs';
import { useEffect, useState } from 'react';

function GifGrid({ categorie }) {
  // actualizar estados de la imagenes
  const [images, setImages] = useState([]);

  // función para obtener las imagenes asicronas de la promesa del getGifs
  // invocamos la función de la API GIF
  const getImages = async () => {
    const newImages = await getGifs(categorie);
    // actualizamos el estado de images con la imagenes obtenidas
    setImages(newImages);
  };

  // hook se ejecutara una sola vez, por [] dependencias
  useEffect(() => {
    getImages();
  }, []); /*Se ejecuta una sola vez al inicio */

  return (
    <>
      <h3 className='text-4xl text-white'>{categorie}</h3>
      <ol className='text-white'>
        {/* { images.map} */}
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
        <li>titulo</li>
      </ol>
    </>
  );
}
GifGrid.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default GifGrid;
