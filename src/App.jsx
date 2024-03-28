// import './App.css';

import { useState } from 'react';
import { Header, Listado } from './componentes';
import Footer from './componentes/Footer';

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <>
      {/* Enviamos los prop hacia header y luego inputs */}
      <Header categories={categories} setCategories={setCategories} />
      <main className='mx-20 mt-20'>
        <Listado categories={categories} />
      </main>

      <Footer />
    </>
  );
}

export default App;
