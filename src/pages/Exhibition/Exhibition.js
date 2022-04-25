import React, { useEffect,useState } from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'

import Header from '../../components/Header/Header'
import { fetchExhibitions } from '../../redux'
import { newPostExhibition } from '../../redux/postExhibition/newPostActions'


function Exhibition({exhibitions,getExhibitions, listedExhibition, postExhibition}) {
  const [addModalOpen,setAddModalOpen] = useState(false)
  const [exhibitionModalOpen, setExhibitionModalOpen] = useState(false)
  const [endDate,setEndDate] = useState("")
  const [startDate, setStartDate] = useState("")
  const [type,setType] = useState("")
  const [id,setId] = useState("")
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [gId, setGId] = useState("")
  const [newName,setNewName] = useState("")
  const [newLocation,setNewLocation] = useState("")
  const [newType,setNewType] = useState("")
  const [newStartDate,setNewStartDate] = useState("")
  const [newEndDate,setNewEndDate] = useState("")
  const [newGId, setNewGId] = useState("")
  const [reload, setReload] = useState(false)
    useEffect(()=>{
        getExhibitions()
    },[reload])

    const submitExhibition=()=>{
        const exPost={
          end_date: newEndDate,
          start_date: newStartDate,
          e_type: newType,
          e_name: newName,
          location: newLocation,
          g_id: newGId
        }
        postExhibition(exPost)
        setReload(!reload);
        setNewEndDate("");setNewStartDate(""); setNewEndDate(""); setNewType(""); setNewName(""); setNewLocation(""); setNewGId("");
    }

  return (
    <div>
        <Header/>
        <div style={{display:"flex", flexDirection:"column"}}>
          <div style={{display:"flex", justifyContent:"space-between"}}> <h1 style={{margin:"20px"}}>EXHIBITIONS</h1> <button style={{margin:"20px"}} onClick={()=>setAddModalOpen(true)}>Add Exhibition</button></div>
        <div>
            {exhibitions.exhibitions?.map(el=> <div style={{border:"5px solid black", margin:"10px"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{margin:"8px"}}>{el.e_name}</h1>
                <button onClick={()=>{setEndDate(el.end_date); setStartDate(el.start_date); setType(el.e_type); setId(el.e_id); setName(el.e_name); setLocation(el.location); setGId(el.g_id); setExhibitionModalOpen(true)}} style={{margin:"8px"}}>Read More</button>
              </div>
            
            </div>)}
        </div>
        </div>

        <Modal isOpen={addModalOpen} contentLabel="EXAMPLE MODAL">
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <div style={{flex:"0.8"}}>
            <h1  style={{display:"flex",justifyContent:"center"}}>ADD EXHIBITION</h1>
            </div>
            <div style={{flex:"0.2", display:"flex", justifyContent:"end"}}>
            <img style={{width:"50px", margin:"20px", cursor:"pointer"}} src='close-icon.png' alt="" onClick={()=>{ setAddModalOpen(false)}}/>
            </div>
            
            </div>

            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", height:"80vh", width:"100%"}}>
            <div style={{display:"flex", justifyContent:"center", width:"100%"}}>
              <div style={{height:"50vh", width:"30%", backgroundColor:"black", borderRadius:"5%", display:"flex", flexDirection:"column"}}>
                <div style={{display:"flex", justifyContent:"center"}}><h2 style={{color:"white"}}>LIST EXHIBITION</h2></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)} placeholder='Enter Exhibition Name' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newLocation} onChange={(e)=>setNewLocation(e.target.value)} placeholder='Enter Exhibition Location' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newType} onChange={(e)=>setNewType(e.target.value)} placeholder='Enter Exhibition Type' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newStartDate}  onChange={(e)=>setNewStartDate(e.target.value)} placeholder='Enter Exhibition Start Date (DD-MM-YYYY)' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newEndDate} onChange={(e)=>setNewEndDate(e.target.value)} placeholder='Enter Exhibition End Date (DD-MM-YYYY)' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><input type="text" value={newGId} onChange={(e)=>setNewGId(e.target.value)} placeholder='Enter Exhibition Gallery ID' style={{width:"80%", marginTop:"20px"}}></input></div>
                <div style={{display:"flex", justifyContent:"center"}}><button style={{margin:"30px", width:"30%"}} onClick={submitExhibition}>SUBMIT</button></div>
                {/* <div style={{display:"flex", justifyContent:"center"}}> {listedArt.loading?(<h3>LOADING...</h3>):(<>{listedArt.error?(<h3 style={{color:"white"}}>{listedArt.error}</h3>):(<>{listedArt.insertionId?(<h3 style={{color:"white"}}>{listedArt.insertionId[0]}</h3>):(<h1 style={{color:"white"}}></h1>)}</>)}</>)} </div> */}
                
              </div>   

            </div>
            </div>
          </div>
        </Modal>

        <Modal isOpen={exhibitionModalOpen} contentLabel="EXAMPLE MODAL">
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <div style={{flex:"0.8"}}>
            <h1  style={{display:"flex",justifyContent:"center"}}>EXHIBTION DETAILS</h1>
            </div>
            <div style={{flex:"0.2", display:"flex", justifyContent:"end"}}>
            <img style={{width:"50px", margin:"20px", cursor:"pointer"}} src='close-icon.png' alt="" onClick={()=>{ setExhibitionModalOpen(false)}}/>
            </div>
            
            </div>

            <div>
              <h2>Exhibition: {name}</h2>
              <h3>Location: {location}</h3>
             
              <h3>Start Date: {startDate}</h3>
              <h3>End Date: {endDate}</h3>
            
              <h3>Exhibition Type: {type}</h3>
              <h3>Exhibition ID: {id}</h3>
              <h3>Gallery ID: {gId}</h3>
            </div>
          </div>
        </Modal>
        
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        exhibitions: state.exhibitionsReducer,
        listedExhibition: state.postExhibitionReducer
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        getExhibitions:()=>dispatch(fetchExhibitions()),
        postExhibition:(exPost)=>dispatch(newPostExhibition(exPost))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Exhibition)