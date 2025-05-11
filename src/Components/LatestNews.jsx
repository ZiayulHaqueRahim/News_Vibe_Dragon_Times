import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex flex-row items-center gap-5 bg-base-200 text-lg p-1 rounded-xl'>
           <p className='base-100 bg-secondary px-3 py-2'> latest!!!</p>
           <Marquee className='flex gap-7' pauseOnHover={true} speed={70}>
                 <p className='font-bold text-lg'>   Latest threat on India from various border including Chins, Pakistan & Bangladesh for geopolitical situation that arising from Kashmir </p>
           </Marquee>
           
        </div>
    );
};

export default LatestNews;