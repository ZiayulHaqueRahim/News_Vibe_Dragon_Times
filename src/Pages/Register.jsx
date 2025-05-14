
import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import  { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser,setUser,updateUser} = use(AuthContext);
    const [nameError, setNameError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) =>{
        e.preventDefault();
     
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoUrl = e.target.photoUrl.value;
        const password = e.target.password.value;
        if(name.length <  5){
            setNameError('Minimum 5 character required');
            return;
        }else{
          setNameError('');
        };


        createUser(email,password)
        .then((result)=>{
            const user = result.user;
            // setUser(user);
            alert('User Register done....')
            updateUser({displayName : name, photoURL : photoUrl })
            .then(()=>{
              setUser({...user,displayName : name, photoURL : photoUrl});
              navigate('/');
            }).catch((error)=>{
              console.log(error);
              setUser(user);
            });
        })
        .catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
        
        
    }



    return (
        <div className="flex flex-col justify-center min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
              <h2 className="font-semibold text-2xl text-center py-5">Register Your Account</h2>
            <fieldset className="fieldset">
                {/*name*/}
              <label className="label">Name</label>
              <input name="name" required type="text" className="input" placeholder="Name" />

              { nameError && <p   className='text-red-300  text-sm' > {nameError}</p>}

                {/*email*/}
              <label className="label">Email</label>
              <input name="email" required type="email" className="input" placeholder="Email" />
                {/*photo_url*/}
              <label className="label">Photo URL</label>
              <input name="photoUrl" required type="text" className="input" placeholder="Photo URL" />
                {/*pass*/}    
              <label className="label">Password</label>
              <input name="password" required type="password" className="input" placeholder="Password" />
              <div>
              </div>
              <button type='submit' className="btn btn-neutral mt-4">Register</button>
              <p className=" py-2 text-secondary">Already have any Account?<Link to='/auth/login' className="text-black space-x-2 px-2" > Login</Link>  </p>
            </fieldset>
          </form>
        </div>
      </div>
    );
};

export default Register;