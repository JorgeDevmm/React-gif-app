const getGifs = async (categorie) => {
  // ruta de url
  const url = `https://api.giphy.com/v1/gifs/search?api_key=jpdRDe8hVf54hZZG8n3HzZbdhhIVMmOb&q=${categorie}&limit=10`;

  // esperamos que se complete la petición url del fetch
  const respuesta = await fetch(url);

  // convierto en json la data obtenida,destructuramos el array data
  const { data } = await respuesta.json();

  // iteramos el array data y creamos un nuevo array y vamos creando un nuevo objeto con 3 propiedades
  const gifs = data.map((obj) => ({
    id: obj.id,
    title: obj.title,
    url: obj.images.downsized_medium.url,
  }));

  console.log(gifs);
  return gifs;
};

export default getGifs;
