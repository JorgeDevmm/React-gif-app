import PropTypes from 'prop-types';
import { useState } from 'react';

function AddCategory({ onAddCategory }) {
  // estado inicial y función que cambia el estado del input
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (event) => {
    // actualizamos con el valor que escribimos el inputValue
    setinputValue(event.target.value);
  };

  // Función para agregar una categoria
  const onSubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe

    // Validación para no tener espacios vacios
    if (inputValue.trim().length <= 1) return;

    // devuelve el valor del input obtenido
    onAddCategory(inputValue.trim());
    setinputValue(''); // Limpiar el valor del input para que se renderice de nuevo
  };

  return (
    <form
      onSubmit={onSubmit}
      className='flex justify-between items-center sm:ml-auto bg-[#F1F1F2] my-8 rounded-full border-[#202124] border-2'
    >
      <input
        type='text'
        className='bg-[#F1F1F2] py-4 px-4 rounded-full focus:outline-none text-xl font-400'
        placeholder='Agregar Categoria'
        value={inputValue}
        onChange={(event) => onInputChange(event)}
      />
      <span className='ml-auto text-[#202124] font-bold'>|</span>
      {/* boton que hara la busqueda de categoria */}
      <button
        className='bg-red cursor-pointer'
        // onClick={onAddCategory}
      >
        <img
          className='w-8 mx-2'
          src='./src/assets/search-svgrepo-com.svg'
          alt=''
        />
      </button>
    </form>
  );
}
AddCategory.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
};
export default AddCategory;
