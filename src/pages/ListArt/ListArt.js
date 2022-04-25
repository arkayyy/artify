import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { newPost } from '../../redux'
import Header from '../../components/Header/Header'

function ListArt({listedArt, newListArt}) {
  const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated, isLoading} = useAuth0()

  const [title,setTitle] = useState("")
  const [year,setYear] = useState("")
  const [url,setUrl] = useState("")
  const [type,setType] = useState("")
  const [cost,setCost] = useState("")

  const submitArt=()=>{
    const artPost = {
      title: title,
      year: year, 
      url: url,
      type: type,
      c_id: user.name,
      a_id: user.name,
      cost: cost

    }
    newListArt(artPost)
    setTitle("");
    setYear(""); setType(""); setUrl(""); setCost("");
  }
  return (
    <div>
        <Header/>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"80vh", width:"100%"}}>
            <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
              <div style={{height:"50vh", width:"30%", backgroundColor:"black", borderRadius:"5%", display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center"}}><h2 style={{color:"white"}}>LIST ART</h2></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Enter Title' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={year} onChange={(e)=>setYear(e.target.value)} placeholder='Enter Year' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={url}  onChange={(e)=>setUrl(e.target.value)} placeholder='Enter Preview URL' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder='Enter Painting Type' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={cost} onChange={(e)=>setCost(e.target.value)} placeholder='Enter Listing Cost' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><button style={{margin:"30px", width:"30%"}} onClick={submitArt}>SUBMIT</button></div>
                <div style={{display:"flex", justifyContent:"center"}}> {listedArt.loading?(<h3>LOADING...</h3>):(<>{listedArt.error?(<h3 style={{color:"white"}}>{listedArt.error}</h3>):(<>{listedArt.insertionId?(<h3 style={{color:"white"}}>{listedArt.insertionId[0]}</h3>):(<h1 style={{color:"white"}}></h1>)}</>)}</>)} </div>
                
              </div>   

            </div>
        </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        listedArt: state.newArtPost
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        newListArt: (artPost)=>dispatch(newPost(artPost))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(ListArt)