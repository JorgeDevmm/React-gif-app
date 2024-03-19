import PropTypes from 'prop-types';

function GifItem({ id, title, url }) {
  return (
    // mostramos un la información en etiquetas
    <div key={id} className='flex flex-col items-center'>
      {/* Contenedor de la imagen con ancho máximo */}
      <img src={url} alt={title} className='w-full' />{' '}
      {/* Imagen con ancho completo */}
      <p className='bg-[#2E8CC2] rounded-sm py-4 rounded-b-lg text-center w-full'>
        {title}
      </p>
    </div>
  );
}
GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GifItem;
