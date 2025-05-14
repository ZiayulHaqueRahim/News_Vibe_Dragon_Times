import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { Outlet, useLoaderData, useParams } from 'react-router';
import RightAside from '../Components/HomePage/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [news,setNews] = useState({});
 
    
    
    useEffect(()=>{
        const newsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(newsDetails); 
    },[data,id]);
    
    return (
        <div>
            <Header className='py-5'/>
            <main className=' w-11/12 grid grid-cols-12  mx-auto gap-4 py-5'>
                <section className='col-span-9'>
                    <h2 className='font-bold text-xl mb-5 text-center'>News Details:</h2>
                    <NewsDetailsCard news={news} />
                </section>
                <aside className='col-span-3'>
                    <RightAside />
                </aside> 
            </main>
        </div>
    );
};

export default NewsDetails;