// import './App.css';

import Header from './componentes/Header';
import Input from './componentes/Input';
import Listado from './componentes/Listado';
import Footer from './componentes/Footer';
import { useState } from 'react';

function App() {
  const [categorias, setCategorias] = useState(['Animes',"dragon ball"]);

  console.log(categorias);

  return (
    <>
      <Header />
      <main>
        <Input />
        <Listado categorias={categorias} />
      </main>

      <Footer />
    </>
  );
}

export default App;
