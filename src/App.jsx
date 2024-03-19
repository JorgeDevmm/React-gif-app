// import './App.css';

import Header from './componentes/Header';
import Listado from './componentes/Listado';
import Footer from './componentes/Footer';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState([]);

  return (
    <>
      {/* Enviamos los prop hacia header y luego inputs */}
      <Header className="fixed" categories={categories} setCategories={setCategories} />
      <main className='mx-20 mt-20'>
        <Listado categories={categories} />
      </main>

      <Footer />
    </>
  );
}

export default App;
