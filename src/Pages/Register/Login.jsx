import { Link } from "react-router-dom"
import registerImg from "../../../src/assets/images/login/login.svg"
import { useContext } from "react"
import { AuthContext } from "../../Providers/AuthProvider"

const Login = () => {
  const {success, setSuccess, error, setError, loginUser, googleLogin, githubLogin, forgetPassword } = useContext(AuthContext);

  const handleLogin = event =>{
    event.preventDefault();
    const form = new FormData(event.currentTarget); 
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password)

    setError('');
    setSuccess('');

    console.log(email, password);
    loginUser(email, password)
    .then(result =>{
      console.log(result);
      setSuccess('Login Successful');
    })
    .catch(error =>{
      console.error(error);
      setError('Email or Password incorrect');
    })
  }

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.error(error)
    })
  }
  const handleGithubLogin = () =>{
    githubLogin()
    .then(result =>{
      console.log(result)
    })
    .catch(error =>{
      console.error(error)
    })
  }
  const handleForget = () =>{
    forgetPassword()
    .then(result =>{
      console.log(result);
      alert('Password resend successful. Check your email')
    })
    .catch(error =>{
      console.error(error);
    })
  }
  
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          <div className="text-center lg:text-right">
            <img src={registerImg} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a onClick={handleForget} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              {
                success && 
                <small>{success}</small>
              }
              {
                error && 
                <small>{error}</small>
              }
              <div className="form-control">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <div className="flex justify-center gap-5 mb-2">
              <button onClick={handleGoogleLogin} className="btn btn-outline">Google</button>
              <button onClick={handleGithubLogin} className="btn btn-outline">Github</button>
            </div>
            <p className="text-center mb-5">New Here?<Link to={'/signup'} className={'text-[#FF3811] font-bold'}>Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login