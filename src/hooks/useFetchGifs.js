import { useState, useEffect } from "react";
import getGifs from "../helpers/getGifs";


const useFetchGifs = (categorie) => {
  // actualizar estados de la imagenes
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // función para obtener las imagenes asicronas de la promesa del getGifs
  // invocamos la función de la API GIF
  const getImages = async () => {
    const newImages = await getGifs(categorie); /*retorna promesa de array */
    // actualizamos el estado de images con la imagenes obtenidas
    setImages(newImages);
    setIsLoading(false)
  };

  // hook se ejecutara una sola vez, por [] dependencias
  useEffect(() => {
    getImages();
  }, []); /*Se ejecuta una sola vez al inicio */

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
