import PropTypes from 'prop-types';
import AddCategory from './AddCategory';

function Header({ categories, setCategories }) {
  // función para manejar y agregar nuevas categoria
  const onAddCategory = (newCategory) => {
    // validamos si la categortia existe en el arreglo, nos ayudar para no repetir key
    if (
      categories.find(
        (categorie) => categorie.toLowerCase() === newCategory.toLowerCase()
      )
    ) {
      console.log('ya existe');
      return;
    }

    // agregando a categoria lo ingresado lo del inputValue
    setCategories([...categories, newCategory.toLowerCase()]);
  };

  return (
    <div className='flex flex-col sm:flex-row  md:items-center text-center  md:text-left px-4 bg-white'>
      <h1 className='flex justify-center sm:items-center font-bold text-4xl py-4 md:py-0 md:text-3xl'>
        Gif App
      </h1>

      <AddCategory
        // categories={categories} setCategories={setCategories}
        onAddCategory={(value) => onAddCategory(value)}
      />
    </div>
  );
}
Header.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};
export default Header;
