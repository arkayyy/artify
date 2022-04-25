import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'

import Header from '../../components/Header/Header'
import { fetchGalleries } from '../../redux/getGalleries/getGalleriesActions'
import { newPostGallery } from '../../redux/postGallery/newPostActions'

function Galleries({galleries, getGalleries,postGallery,listedGallery}) {
  const [addModalOpen,setAddModalOpen] = useState(false)
  const [galleryModalOpen, setGalleryModalOpen] = useState(false)
  const [newName, setNewName] = useState("")
  const [newLocation, setNewLocation] = useState("")
  const [newUrl, setNewUrl] = useState("")

  const [name,setName] = useState("")
  const [location, setLocation] = useState("")
  const [url, setUrl] = useState("")
  const [gId, setGId] = useState("")
    
  useEffect(()=>{
        getGalleries()
    },[])

    const submitGallery=()=>{
        const galPost = {
          g_name: newName,
          location: newLocation,
          url: newUrl
        }
        postGallery(galPost)
        setNewLocation(""); setNewName(""); setNewUrl("");
    }

  return (
    <div>
        <Header/>
        <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}> <h1 style={{margin:"20px"}}>GALLERIES</h1> <button style={{margin:"20px"}} onClick={()=>setAddModalOpen(true)}>Add Gallery</button> </div>
        <div>
            {galleries.galleries?.map(el=> <div style={{border:"5px solid black", margin:"10px"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{margin:"8px"}}>{el.g_name}</h1>
                <button onClick={()=>{setName(el.g_name); setLocation(el.location); setUrl(el.url); setGId(el._id); setGalleryModalOpen(true);}} style={{margin:"8px"}}>Read More</button>
              </div>
            
            </div>)}
        </div>
        </div>

        <Modal isOpen={addModalOpen} contentLabel="EXAMPLE MODAL">
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <div style={{flex:"0.8"}}>
            <h1  style={{display:"flex",justifyContent:"center"}}>ADD GALLERY</h1>
            </div>
            <div style={{flex:"0.2", display:"flex", justifyContent:"end"}}>
            <img style={{width:"50px", margin:"20px", cursor:"pointer"}} src='close-icon.png' alt="" onClick={()=>{ setAddModalOpen(false)}}/>
            </div>
            
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"80vh", width:"100%"}}>
            <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
              <div style={{height:"50vh", width:"30%", backgroundColor:"black", borderRadius:"5%", display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center"}}><h2 style={{color:"white"}}>LIST NEW GALLERY</h2></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Enter Gallery Name' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newLocation} onChange={(e)=>setNewLocation(e.target.value)} placeholder='Enter Gallery Location' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newUrl} onChange={(e)=>setNewUrl(e.target.value)} placeholder='Enter Gallery Website' style={{width:"80%", marginTop:"20px"}}></input></div>
                
                <div style={{display:"flex", justifyContent:"center"}}><button style={{margin:"30px", width:"30%"}} onClick={submitGallery}>SUBMIT</button></div>
                {/* <div style={{display:"flex", justifyContent:"center"}}> {listedArt.loading?(<h3>LOADING...</h3>):(<>{listedArt.error?(<h3 style={{color:"white"}}>{listedArt.error}</h3>):(<>{listedArt.insertionId?(<h3 style={{color:"white"}}>{listedArt.insertionId[0]}</h3>):(<h1 style={{color:"white"}}></h1>)}</>)}</>)} </div> */}
                
              </div>   

            </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={galleryModalOpen} contentLabel="EXAMPLE MODAL">
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <div style={{flex:"0.8"}}>
            <h1  style={{display:"flex",justifyContent:"center"}}>GALLERY DETAILS</h1>
            </div>
            <div style={{flex:"0.2", display:"flex", justifyContent:"end"}}>
            <img style={{width:"50px", margin:"20px", cursor:"pointer"}} src='close-icon.png' alt="" onClick={()=>{ setGalleryModalOpen(false)}}/>
            </div>
            
            </div>

            <div>
              <h2>Gallery Name: {name}</h2>
              <h3>Location: {location}</h3>
              <h3>Gallery Website: {url}</h3>
              <h3>Gallery ID: {gId}</h3>
            </div>
          </div>
        </Modal>
        
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        galleries: state.galleriesReducer,
        listedGallery : state.galleryPostReducer
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        getGalleries: ()=> dispatch(fetchGalleries()),
        postGallery: (galPost)=>dispatch(newPostGallery(galPost))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Galleries)