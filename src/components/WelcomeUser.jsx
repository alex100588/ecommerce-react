import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const WelcomeUser = () => {
    const { userName } = useContext(AppContext);
    // console.log(userName);
    
  return (
    <p className="text-white text-end me-5 h4">
    {userName && `Welcome ${userName}`}
  </p>
  )
}

export default WelcomeUser