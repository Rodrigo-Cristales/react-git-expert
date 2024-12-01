import React, { useState, useEffect } from 'react'
import { GiFitem } from './GiFitem';
import { UseFecthGifs } from '../hooks/useFetchGifs';


const GifGrid = ({category}) => {
  
  const {imagen, IsLoding} = UseFecthGifs(category);
  console.log(imagen, IsLoding);

  return (
    <>
        <h3>{category}</h3>
        <section>
          <div className='card-grid'>
          {
               imagen.map((image) => (
                <GiFitem 
                key={image.id}
                {... image}
                
                />
              ))
          }
          </div>
         
             
        </section>
    </>
  )
}

export default GifGrid
