import React from 'react'
import {useAuth0} from '@auth0/auth0-react'

import Header from '../../components/Header/Header'

function Home() {
    const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated} = useAuth0()
  return (
    <div>
      <Header/>

      <div style={{height:"90vh",backgroundImage:"url(https://ipfs.infura.io/ipfs/QmQEFEjhtQDzCqZSLmLY8rJKcGGTSgqwYjxL5wNjNsRhcN)"}}>

      </div>
    </div>
  )
}

export default Home