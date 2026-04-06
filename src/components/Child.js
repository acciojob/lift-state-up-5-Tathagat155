import React from 'react'
const Child = ({isLoggedIn,setLogin}) => {
  return (
   <div>
  {isLoggedIn ? (<div>You are logged in!</div> ):(<div>
     <form>
      <div>Username:<input type='text' ></div>
      <div>Password:<input type="password"></div>
     <div><button onClick={(e)=>{
       e.preventDefault();
       setLogin(true)
     }}>Login</button>
  </div>
    </form>
    </div>)}
    </div>
    
  )
}

export default Child
