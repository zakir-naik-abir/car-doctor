
// import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import registerImg from "../../../src/assets/images/login/login.svg"
import { AuthContext } from "../../Providers/AuthProvider";


const UpdateProfile = () => {
  const { updateUserProfile, setSuccess, setError, } = useContext(AuthContext);

  // const location = useLocation();
  // const navigate = useNavigate('')

  const profileUpdate = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const name = form.get('name')
    const photo = form.get('photo')
    

    setSuccess('');
    setError('');
    
    
    updateUserProfile(name, photo)
    .then( ()=>{
      alert('Update successful')
      // navigate(location?.state ? location.state : '/');
    })
  
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row lg:flex-row">
          <div className="text-center lg:text-right">
            <img src={registerImg} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
            <h1 className="text-5xl font-bold text-center">Update Profile</h1>
            <form onSubmit={profileUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="text" name="photo" placeholder="Your Photo URL" className="input input-bordered" required />
              </div>
              
              <div className="form-control mt-1">
                <input className="btn btn-primary" type="submit" value="Update" />
              </div>
            </form>
            

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile;