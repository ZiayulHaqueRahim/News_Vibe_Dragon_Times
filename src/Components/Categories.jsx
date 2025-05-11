import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch("/categories.json").then((res)=>res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    
  
    
    return (
        <div>
            <h2 className='font-bold '>All Categories({categories.length}) </h2>
            <div className='grid grid-cols-1 mt-5 gap-2 py-1'>
                {
                    categories.map((category)=><NavLink 
                        key={category.id}
                        className={"btn text-accent font-semibold border-0 hover:bg-base-300"}
                        to={`/category/${category.id}`}
                        category={category}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;