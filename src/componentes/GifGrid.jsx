import PropTypes from 'prop-types';
import getGifs from '../helpers/GetGifs';


function GifGrid({ categorie }) {

  // invocamos la función de la API GIF
  getGifs(categorie);

  return (
    <>
      <h3 className='text-4xl text-white'>{categorie}</h3>
      <div key={categorie} className='text-white font-bold'>
        {categorie}
      </div>
    </>
  );
}
GifGrid.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default GifGrid;
