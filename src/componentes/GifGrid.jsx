import PropTypes from 'prop-types';

import GifItem from './GifItem.jsx';
import useFetchGifs from '../hooks/useFetchGifs.js';

function GifGrid({ categorie }) {
  // custom hook
  const { images, isLoading } = useFetchGifs(categorie);

  console.log({ isLoading });

  return (
    <>
      <h3 className='text-4xl text-white sm:mx-20 pb-8 font-bold'>
        {categorie.toUpperCase()}
      </h3>
      {isLoading && <h2>Cargando...</h2>}

      <div className='text-white grid grid-rows-1 sm:grid-rows-5 md:grid-rows-5 lg:grid-rows-4 sm:grid-flow-col gap-5 sm:mx-20 mb-8'>
        {/* validamos si existen elementos en el array images, si tuviera iteramos */}
        {images.length > 0 ? (
          images.map((gif) => (
            <GifItem
              key={gif.id}
              // aplicamos spread operator del elemento gif
              {...gif}
            />
          ))
        ) : (
          <li>No hay imagenes</li>
        )}
      </div>
    </>
  );
}
GifGrid.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default GifGrid;
