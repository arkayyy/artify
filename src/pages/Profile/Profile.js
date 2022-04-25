import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

import Header from '../../components/Header/Header'

function Profile() {
    const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated, isLoading} = useAuth0()


  return (
    <div>
        <Header/>
        <div style={{display:"flex",flexDirection:"column", width:"100%"}}>
            <div style={{display:"flex", flex:"0.2", justifyContent:"center"}}><h1>PROFILE</h1></div>

            <div style={{flex:"0.8", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
                <div style={{display:"flex", justifyContent:"center"}}><h2>Username: {isAuthenticated?(<>{user.name}</>):(<>Loading...</>)}</h2></div>
                {/* <div style={{display:"flex"}}><h2>Artist ID: {}</h2> <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><button style={{height:"20px"}}>View Artist Profile</button></div></div> */}
                {/* <div style={{display:"flex"}}><h2>Customer ID: {}</h2> <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}}><button>View Customer Profile</button></div></div> */}
                <div style={{display:"flex", justifyContent:"center"}}><button style={{width:"30%"}} onClick={()=>{logout();}}>SIGN OUT</button></div>
            </div>
        </div>
    </div>
  )
}

export default Profile