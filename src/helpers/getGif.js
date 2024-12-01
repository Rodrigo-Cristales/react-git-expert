export const MostrarGif = async(category) =>{
    //hacer nuestra api key que fue probada en postman 
      const url = `https://api.giphy.com/v1/gifs/search?api_key=m19DlIGTOuaDHxe6peOp5iD8scmXHplM&q=${category}&limit=20`
      //Hacer mostrar los gif con un await, recordar poner una funcion asincrona
        const mostrar = await fetch(url)
        const {data} = await mostrar.json();
  
        const gifs = data.map(img => ({
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }));
        console.log(gifs);    
        return gifs;    
  }