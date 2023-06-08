
import { useState } from "react";


export const AddCategory= ( { onNewCategory })=>{

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target})=>{ 
        //console.log(target.value);
        setInputValue( target.value)}


    const onSubmit = (event)=>{
        event.preventDefault();
        console.log(inputValue);

        const value = inputValue.trim();

        if( value.length<=1) return;

        //setCategories( categories => [...categories,inputValue] );
        onNewCategory( value );
        setInputValue(''); 
    }

    return(

        <form onSubmit={ (event)=>onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value = { inputValue }
                onChange= { onInputChange }
            />
        </form>
       
    )
}