import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
 
    return (
        <div className='space-y-5'>
            <img className='w-full h-[350px] object-cover rounded-xl' src={news.image_url} />
            <h3>{news.title}</h3>
            <p>{news.details}</p>
                <Link className='brn btn-outline text-center' to={`/category/${news.category_id}`}><button className='btn btn-outline text-center  mx-auto  rounded-se-none'>Back to Category</button></Link>
        </div>
    );
};

export default NewsDetailsCard;