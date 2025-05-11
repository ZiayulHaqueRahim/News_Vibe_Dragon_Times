import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SlSocialGoogle } from 'react-icons/sl';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With:</h2>
            <div className='space-y-5 mt-2'>
            <button className=' btn  btn-secondary btn-outline w-full'><SlSocialGoogle size={24}/>Login With Google</button> 
                <button className=' btn btn-primary btn-outline w-full'><FaGithub scale={24} />Login With Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;