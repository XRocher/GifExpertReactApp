import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = ()=>{

    const onAddCategory = (newcategory)=> {
        
        if( !categories.includes(newcategory) )
            setCategories( [newcategory,...categories] )
        else
            return;
        
    };
    const [ categories, setCategories] = useState(['Electronics']);

    return (

        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}
            <AddCategory 
                onNewCategory = { value => onAddCategory(value) }
            />
            
            {/* Listado de gif */}
      
            { 
                categories.map( category =>(
                        <GifGrid 
                            key       = {category} 
                            category  = {category}
                        />
                    )
                ) 
            }
      
                {/* Gif item */}
        </>
    )
}