import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

    

const CategoryNews = () => {
    const  [categoryNews, setCategoryNews] = useState([]);
    const {id} = useParams();
    const data = useLoaderData();
    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data);
            return;
        }else if(id == "1"){
            const filterNews = data.filter((news)=>news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }else{
            const filterNews = data.filter((news)=>news.category_id == id);
            setCategoryNews(filterNews);
        };  
    },[data,id])
    console.log(data);
    
    return (
        <div>
            <h2 className='font-semibold '>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h2>
            <div className='grid grid-cols-1 '>
                {
                    categoryNews.map((singleNews)=><NewsCard  key={singleNews.id} singleNews={singleNews}/>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;