// import PropTypes from 'prop-types'
function Input() {
  return (
    <form className='flex justify-center items-center'>
      <input
        type='text'
        className='w-4/5  md:w-2/5 my-8 py-2 rounded-xl mx-auto'
      />
    </form>
  );
}
Input.propTypes = {};
export default Input;
