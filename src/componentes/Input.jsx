import PropTypes from 'prop-types';

function Input({ categories, setCategories }) {
  const onAddCategory = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe


    setCategories([...categories,"validando"]);
  };

  return (
    <form className='flex justify-between items-center sm:ml-auto bg-[#F1F1F2] my-8 rounded-full'>
      <input
        type='text'
        className='bg-[#F1F1F2] w-full py-4 px-4 rounded-full focus:outline-none text-2xl font-400'
      />
      <span className='ml-auto text-[#202124]'>|</span>
      <button className='bg-red cursor-pointer' onClick={onAddCategory}>
        <img
          className='w-8 mx-2'
          src='./src/assets/search-svgrepo-com.svg'
          alt=''
        />
      </button>
    </form>
  );
}
Input.propTypes = {
  categories: PropTypes.array.isRequired,
  setCategories: PropTypes.func.isRequired,
};
export default Input;
