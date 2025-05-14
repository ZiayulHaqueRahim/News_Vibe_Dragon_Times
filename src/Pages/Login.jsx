
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";

    
    const Login = () => {
        const {signInUser} = use(AuthContext);
        

        const location = useLocation();
        const navigate = useNavigate();

        const handleLogin = (e) =>{
        e.preventDefault();
        const email =  e.target.email.value;
        const password = e.target.password.value;

        signInUser(email,password)
        .then((result)=>{
            const signedUser = result.user;
            alert('user signed in');
            navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((error)=>{
            console.error(error);
        });
        
    }



  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
            <h2 className="font-semibold text-2xl text-center py-5">Login Your Account</h2>
          <fieldset className="fieldset">
                {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
                {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
            <p className=" py-2 text-secondary">Don't have any Account?<Link to='/auth/register' className="text-black space-x-2 px-2" > Register</Link>  </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
