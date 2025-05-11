import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomePage/LeftAside';
import RightAside from '../Components/HomePage/RightAside';

const HomeLayout = () => {
    return (
        <div>
           <header>
           <Header />
                <section className='w-11/12 mx-auto'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar />
                </nav>
           </header>
            <main className='  grid grid-cols-12 gap-2 w-11/12 mx-auto my-1 '> 
                <aside className='col-span-3 h-2 sticky top-2'>
                    <LeftAside />
                </aside>
                <section className='main col-span-6'>
                    <Outlet /> 
                </section>
                <aside className='col-span-3 sticky top-2 h-2'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;