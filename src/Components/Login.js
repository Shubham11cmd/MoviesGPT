import React, { useRef, useState } from 'react'
import Header from './Header'
import { Validateform } from '../Utils/Validateform'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser , removeUser} from '../Utils/Userslice';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const dispatch = useDispatch()
    const [signIn, setSignIn] = useState(true)
    const [error,setError] = useState(null)
    const navigation = useNavigate()
    

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const handlesignin = ()=>{
        setSignIn(!signIn)
    }

    const handlesignclick = ()=>{
        const ret = Validateform(email.current.value , password.current.value)
        setError(ret)
        if(error !== null) return;

        if(!signIn){
          
    createUserWithEmailAndPassword(auth, email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value
        }).then(() => {
           const {uid, displayName, email} = auth.currentUser;
               dispatch(addUser({uid: uid , displayName : displayName , email, email}))
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
    


        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode+"-"+ errorMessage)
        // ..
      });
        }
    
        else if(signIn){
          
    signInWithEmailAndPassword(auth,  email.current.value , password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        //dispatch(addUser({uid : user.uid , displayName: user.displayName , email: user.email}))
        navigation("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode+"-"+errorMessage)
      });

    }

    

 
    }
     
  return (
    <div>
        <Header/>
        <div className='rounded-sm'>
      <img className='absolute w-screen h-screen object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg'/>
      <div className='absolute mt-48  flex-col justify-center align-middle bg-black bg-opacity-40 w-full md:w-96 h-[500px] md:mx-[540px] md:my-48'>
        <h1 className='font-bold mr-60 md:m-0 text-3xl text-white p-6'>{ signIn ? "Sign in" : "Sign Up"}</h1>
      <form onSubmit={(e) => {e.preventDefault()}} className='flex-col justify-between'>
        {!signIn && (
             <input ref={name} type='text' className='w-72 h-12 m-6 p-4' placeholder='Name'/>
        )}
        <input ref={email} type='text' className='w-72 h-12 m-6 p-4 rounded-sm' placeholder='E-mail'/>
        <input ref={password} type='password'className='w-72 h-12 m-6 p-4' placeholder='password'/>
        <p className='text-red-600 font-bold mx-8 p-4'>{error}</p>
        <button onClick={handlesignclick} className='w-72 h-12 mx-8 p-4 bg-red-700 text-white rounded-sm'>{ signIn ? "Sign in" : "Sign Up"}</button>
        <p className='cursor-pointer text-gray-300 mx-7 p-2' onClick={handlesignin}>{ signIn ? "New User? Sign in" : "Already registered? Sign Up"}</p>
      </form>
      </div>
    </div>
    </div>
  )
}

export default Login
