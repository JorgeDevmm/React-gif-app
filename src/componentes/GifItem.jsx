import PropTypes from 'prop-types';

function GifItem({ id, title, url }) {
  return (
    // mostramos un la información en etiquetas
    <div key={id} className=''>
      <img src={url} alt={title} />
      <li className='bg-[#2E8CC2] mt-4 py-1 text-center'>{title}</li>
    </div>
  );
}
GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GifItem;
