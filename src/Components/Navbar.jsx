import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import pic from '../assets/user.png';
const Navbar = () => {
    const {user,logOut} = use(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            alert('User logged out');
        }
        ).catch(()=>{
            console.error();
        }
        )
    };


    return (
        <div className='flex flex-row items-center justify-between py-4'>
            <div className=""></div>
            <div>{user && user.email }</div>
            <div className="nav flex flex-row gap-5 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex flex-row gap-3 ">
                <img className='max-w-10 max-h-10 rounded-full' src={`${user ?  user.photoURL : pic }`} />
                { user ? <button onClick={handleLogOut} className='btn btn-primary px-3' >LogOut</button> : <Link to="/auth/login" className='btn btn-primary px-3'>Login</Link>}
            </div>
        </div>
    );
};

export default Navbar;