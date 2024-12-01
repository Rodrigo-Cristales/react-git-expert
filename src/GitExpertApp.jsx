import React, { useState } from 'react'
import AddCategori from './components/AddCategori';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
    const [categorias, setCategorias] = useState(["Dragon ball"]);

    const onAddCategory = (newCategory) => {
      console.log(newCategory);

      if(categorias.includes(newCategory)) return;

      setCategorias([newCategory, ...categorias]);
  }
  return (
    <>
        <h1>GitExpertApp</h1>
        
        <AddCategori
          onNewCategory={(event) => onAddCategory(event)}
        
        />
        {/*setCategorias={setCategorias}*/}
          {
                categorias.map((category) =>(
                  <GifGrid key={category} category={category}

                  
                  />

                ))
          }           
    
        

    </>
  )
}

export default GitExpertApp
