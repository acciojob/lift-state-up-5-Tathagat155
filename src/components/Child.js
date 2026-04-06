import react from 'react'
const Child = ({isLoggedIn,setLogin}) => {
  return (
   <div>
  {isLoggedIn: <div>You are logged in!</div> ?<div>
     <form>
      <div>Username:<input type='text' ></div>
      <div>Password:<input type="password"></div>
     <div><button onClick={()=>setLogin(true)}>Login</button>
    </form>
    </div>}
    </div>
    
  )
}

export default Child
