import PropTypes from 'prop-types';
import GifGrid from './GifGrid';

function Listado({ categories }) {
  return (
    <>
      {/* iteramos y mostramos el arreglo, usamos la key de la misma categoria previamente validada */}

      {
        categories.map((categorie) => (
          // mandamos la cateogirie y la key
          <GifGrid key={categorie} categorie={categorie} />
        ))
      }
    </>
  );
}
Listado.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Listado;
