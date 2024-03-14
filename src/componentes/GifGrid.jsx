import PropTypes from 'prop-types';

function GifGrid({ categorie }) {
  return (
    <>
      <h3 className='text-4xl text-white' >{categorie}</h3>
      <p key={categorie} className='text-white font-bold'>
        {categorie}
      </p>
    </>
  );
}
GifGrid.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default GifGrid;
