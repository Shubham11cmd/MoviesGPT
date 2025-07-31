import React, { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/Userslice'; // Import your slice actions
import { useNavigate } from 'react-router-dom';
import { showGpt } from '../Utils/MoviesGptslice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user); // Assuming the user data is stored in 'user' slice
  const show = useSelector(store => store.gpt?.nowShowGpt)
  
  const auth = getAuth(); // Initialize the Firebase Auth instance

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, dispatch user data to Redux store
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid, displayName, email })); // Update the Redux store
        navigate("/browse"); // Redirect to browse page
      } else {
        // User is signed out, dispatch removeUser to Redux store
        dispatch(removeUser());
        navigate("/"); // Redirect to home page
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, [dispatch, auth, navigate]);

  const handleClickSignOut = () => {
    signOut(auth).then(() => {
      
      navigate("/"); // Redirect to home page after sign out
      dispatch(removeUser())
    }).catch((error) => {
      console.error("Sign-out error: ", error);
    });
  };

  const gptclickhandle = ()=>{
    dispatch(showGpt())
  }

  return (
    
      <div className="absolute w-screen flex flex-col md:flex-row md:justify-between md:w-full bg-gradient-to-b from-black z-50">
        <img
          className="w-52 h-20  m-auto md:m-0"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Logo"
        />
        {user ? (
          <div className="flex items-center">
            {show ? ( <button onClick={gptclickhandle} className='bg-red-700 p-4 m-4 rounded-sm'>Home Explorer</button>) :  (<button onClick={gptclickhandle} className='bg-red-700 p-4 m-4 rounded-sm'>Movies GPT</button>)}
         
            <img
              className="h-16 w-16 mr-10"
              src="https://i.pinimg.com/564x/d7/19/6a/d7196adc7c4f353d52235c5e6ed12e65.jpg"
              alt="User Avatar"
            />
            <button className="font-bold text-red-700" onClick={handleClickSignOut}>
              Sign Out
            </button>
          </div>
        ) : null}
      </div>
    
  );
};

export default Header;
