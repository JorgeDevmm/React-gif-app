import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs.js';
import { useEffect, useState } from 'react';

function GifGrid({ categorie }) {
  // actualizar estados de la imagenes
  const [images, setImages] = useState([]);

  // función para obtener las imagenes asicronas de la promesa del getGifs
  // invocamos la función de la API GIF
  const getImages = async () => {
    const newImages = await getGifs(categorie); /*retorna promesa de array */
    // actualizamos el estado de images con la imagenes obtenidas
    setImages(newImages);
  };

  // hook se ejecutara una sola vez, por [] dependencias
  useEffect(() => {
    getImages();
  }, []); /*Se ejecuta una sola vez al inicio */

  return (
    <>
      <h3 className='text-4xl text-white sm:mx-20 pb-8 font-bold'>
        {categorie.toUpperCase()}
      </h3>
      <ol className='text-white grid grid-rows-1 sm:grid-rows-5 md:grid-rows-5 lg:grid-rows-4 sm:grid-flow-col gap-5 sm:mx-20 mb-8'>
        {/* validamos si existen elementos en el array images, si tuviera iteramos */}
        {images.length > 0 ? (
          images.map(({ id, title, url }) => (
            // mostramos un la información en etiquetas
            <div key={id} className=''>
              <img src={url} alt={title} />
              <li className='bg-[#2E8CC2] mt-4 py-1 text-center'>{title}</li>
            </div>
          ))
        ) : (
          <li>No hay imagenes</li>
        )}
      </ol>
    </>
  );
}
GifGrid.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default GifGrid;
