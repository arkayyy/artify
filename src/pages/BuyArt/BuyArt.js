import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import Modal from 'react-modal'

import Header from '../../components/Header/Header'
import { fetchArts, fetchCustomerDetails } from '../../redux'

function BuyArt({arts, getArts, getCustomerDetails, customer}) {
  const [artModalOpen,setArtModalOpen] = useState(false)
  const [artTitle, setArtTitle] = useState("")
  const [artYear, setArtYear] = useState("")
  const [artUrl,setArtUrl] = useState("")
  const [artPrice,setArtPrice] = useState("")
  const [artType, setArtType] = useState("")
  const [artId, setArtId] = useState("")
  const [artCid, setArtCid] = useState("")
  
    useEffect(()=>{
        getArts()
    },[])

  return (
    <div>
        <Header/>
        <div>
        <div style={{display:"flex", width:"100%", justifyContent:"center"}}><h1>ARTS / PAINTINGS</h1></div>
        <div>
            
            {arts.arts?.map((el)=><div style={{border:"5px solid black", margin:"10px"}}>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <h1 style={{margin:"8px"}}>{el.title}</h1>
                <button onClick={()=>{setArtTitle(el.title); setArtType(el.type); setArtYear(el.year); setArtPrice(el.cost); setArtUrl(el.url); setArtCid(el.c_id); setArtId(el.a_id); setArtModalOpen(true)}} style={{margin:"8px"}}>Read More</button>
              </div>
            
            </div>)}
        </div>
        <Modal isOpen={artModalOpen} contentLabel="EXAMPLE MODAL">
          <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
            <div style={{flex:"0.8"}}>
            <h1  style={{display:"flex",justifyContent:"center"}}>ART DETAILS</h1>
            </div>
            <div style={{flex:"0.2", display:"flex", justifyContent:"end"}}>
            <img style={{width:"50px", margin:"20px", cursor:"pointer"}} src='close-icon.png' alt="" onClick={()=>{customer.details={}; setArtModalOpen(false)}}/>
            </div>
            
            </div>

            <div>
              <h2>Art Title: {artTitle}</h2>
              <h3>Artist ID: {artId}</h3>
              <h3>Painted in: {artYear}</h3>
              <h3>Preview URL: {artUrl}</h3>
              <h3>Painting Type: {artType}</h3>
              <h3>Price: {artPrice}</h3>
              <button onClick={()=>getCustomerDetails(artCid)} > Contact Owner</button>
            </div>

            {customer.loading?(<>loading...</>):((customer.details && Object.keys(customer.details).length!==0)?(<div>
              <h3>Name: {customer.details.c_name}</h3>
              <h3>Contact no.: {customer.details.phone}</h3>
            </div>):(<>{customer.error}</>))}
          </div>
        </Modal>

        </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return{
        arts: state.artsReducer,
        customer: state.customerDetailsReducer
    }
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return{
        getArts: ()=> dispatch(fetchArts()),
        getCustomerDetails: (id)=> dispatch(fetchCustomerDetails(id))
    }
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(BuyArt)

