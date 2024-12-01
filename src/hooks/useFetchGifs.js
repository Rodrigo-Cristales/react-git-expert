import { useEffect, useState } from "react"
import { MostrarGif } from '../helpers/getGif'

export const UseFecthGifs = (category) =>{
        
    const [imagen, setImagen] = useState([]);
    const [isLodigin, setIsloding] = useState(true);

    const MostrarImagen = async() => {
      const NewImage = await MostrarGif(category);
      setImagen(NewImage);
      setIsloding(false);
    }
  
    useEffect(() => {
      MostrarImagen();
    }, [])



    return {
        imagen,
        isLodigin
    }


}