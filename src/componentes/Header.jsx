import PropTypes from 'prop-types'
import Input from './Input';
function Header({ categories, setCategories }) {
  return (
    <div className='flex flex-col sm:flex-row  md:items-center text-center  md:text-left px-4 bg-white'>
      <h1 className='flex justify-center sm:items-center font-bold text-4xl py-4 md:py-0 md:text-3xl'>
        Gif App
      </h1>

      <Input categories={categories} setCategories={setCategories} />
    </div>
  );
}
Header.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};
export default Header;
