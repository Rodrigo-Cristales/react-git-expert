import React, { useState } from 'react'

const AddCategori = ({onNewCategory}) => {
        const [inputValue, setInputValue] = useState();

        const OnInputChange = (event) =>{
        console.log(event.target.value);
        setInputValue(event.target.value);
    }

    const Onsubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1)return;
        console.log(inputValue);
        onNewCategory( inputValue.trim());        
        setInputValue('');

    }
  return (
    <>
    <form onSubmit={Onsubmit}>
        <input type="text" 
        placeholder='Agregar una nueva categoria' 
        onChange={OnInputChange}/>
    </form>
    </>
  )
}

export default AddCategori
