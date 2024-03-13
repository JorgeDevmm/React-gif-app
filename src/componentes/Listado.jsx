import PropTypes from 'prop-types';

function Listado({ categorias }) {
  return (
    <div>
      <ol>
        {categorias.map((categoria) => {
          return <li className='text-white font-bold' key={categoria}>{categoria}</li>;
        })}
      </ol>
    </div>
  );
}
Listado.propTypes = {
  categorias: PropTypes.array.isRequired,
};
export default Listado;
