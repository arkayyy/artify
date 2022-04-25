import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

function Header() {
    const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated, isLoading} = useAuth0()
  return (
    <div style={{height:"10vh", background:"black", width:"100%", display:"flex"}}>
        <div style={{flex:"0.3", display:"flex", justifyContent:"center", alignContent:"center",alignItems:"center", color:"white"}}>
            <h1 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/')}>ARTIFY</h1>
        </div>
        <div style={{flex:"0.7", display:"flex", justifyContent:"space-evenly",color:"white"}}>
            <h2 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/buy-art')}>BUY ART</h2>
            <h2 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/list-art')}>LIST ART</h2>
            <h2 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/exhibition')}>EXHIBITION</h2>
            <h2 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/galleries')}>GALLERIES</h2>
            {isLoading?(<h2>Loading...</h2>):(isAuthenticated?(<h2 style={{cursor:"pointer"}} onClick={()=>window.location.replace('/profile')}>{user.name}</h2>):(<h2 style={{cursor:"pointer"}} onClick={loginWithRedirect}>SIGN IN</h2>))}
        </div>
    </div>
  )
}

export default Header