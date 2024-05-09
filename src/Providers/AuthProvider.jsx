import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState('');

  // create user
  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // login user with email and password
  const loginUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // login user with google
  const googleProvider = new GoogleAuthProvider;
  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // login user with github
  const githubProvider = new GithubAuthProvider;
  const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }

  // current user
  const [user, setUser] = useState(null);
  useEffect( () =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};
      setUser(currentUser);
      console.log('Current user:', currentUser);
      setLoading(false);
      // if user exists then issue a token
      if(currentUser){
        axios.post('https://car-doctor-server-seven-gold.vercel.app/jwt', loggedUser, {withCredentials: true})
        .then(res => {
          console.log('token response', res.data);
        })
      }
      else{
        axios.post('https://car-doctor-server-seven-gold.vercel.app/logout', loggedUser, {withCredentials: true})
        .then(res =>{
          console.log(res.data);
        })
      }
    })
    return unSubscribe;
  },[])
  
  // update user profile
  const updateUserProfile = (name, image) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: image,
    })
  }

  // forget password
  const forgetPassword = (email) =>{
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  // logout
  const logout = () =>{
    return signOut(auth);
  }

  const authInfo = { loading, success, setSuccess, error, setError, showPassword, setShowPassword, createUser, loginUser, googleLogin, githubLogin, user, updateUserProfile, forgetPassword, logout };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;