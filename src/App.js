import React from 'react';
import useFetchUser from "./hooks/useFetchUser";
import SocialCard from './SocialCard';

function App() {
  
  const {loading, user, getNewUser} = useFetchUser();

  if(loading) return <div>Loading...</div>
  return (
    <div>
      <SocialCard user={user}/>
    </div>
  );
}

export default App;
