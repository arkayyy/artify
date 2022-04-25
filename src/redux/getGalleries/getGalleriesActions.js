import axios from 'axios'
import {FETCH_GALLERIES_REQUEST,FETCH_GALLERIES_SUCCESS,FETCH_GALLERIES_FAILURE} from './getGalleriesTypes'

const fetchGalleriesRequest=()=>{
    return{
        type: FETCH_GALLERIES_REQUEST
    }
}

const fetchGalleriesSuccess=(galleries)=>{
    return{
        type: FETCH_GALLERIES_SUCCESS,
        payload: galleries
    }
}

const fetchGalleriesFailure=(errMsg)=>{
    return{
        type: FETCH_GALLERIES_FAILURE,
        payload: errMsg
    }
}

export const fetchGalleries=()=>{
    return (dispatch)=>{
        dispatch(fetchGalleriesRequest())
        axios.get('/api/get-galleries').then((resp)=>{
            //console.log("ARTS GOT")
            if(resp.data.error)
            {return dispatch(fetchGalleriesFailure(resp.data.error))}
            dispatch(fetchGalleriesSuccess(resp.data.galleries))
        }).catch((err)=>{
            dispatch(fetchGalleriesFailure(err.message))
        })
    }
}