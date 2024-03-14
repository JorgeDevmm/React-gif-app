// import './App.css';

import Header from './componentes/Header';
import Listado from './componentes/Listado';
import Footer from './componentes/Footer';
import { useState } from 'react';

function App() {
  const [categories, setCategories] = useState(['Animes', "dragon ball"]);
  
  return (
    <>
      <Header categories={categories} setCategories={setCategories } />
      <main>
        <Listado categories={categories} />
      </main>

      <Footer />
    </>
  );
}

export default App;
