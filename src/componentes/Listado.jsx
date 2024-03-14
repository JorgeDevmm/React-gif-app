import PropTypes from 'prop-types';

function Listado({ categories }) {
  return (
    <div>
      <ol>
        {categories.map((categorie) => {
          return (
            <li className='text-white font-bold' key={categorie}>
              {categorie}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
Listado.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default Listado;
