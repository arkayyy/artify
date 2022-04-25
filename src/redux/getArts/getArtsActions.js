import axios from 'axios'
import {FETCH_ARTS_REQUEST,FETCH_ARTS_SUCCESS,FETCH_ARTS_FAILURE} from './getArtsTypes'

const fetchArtsRequest=()=>{
    return{
        type: FETCH_ARTS_REQUEST
    }
}

const fetchArtsSuccess=(arts)=>{
    return{
        type: FETCH_ARTS_SUCCESS,
        payload: arts
    }
}

const fetchArtsFailure=(errMsg)=>{
    return{
        type: FETCH_ARTS_FAILURE,
        payload: errMsg
    }
}

export const fetchArts=()=>{
    return (dispatch)=>{
        dispatch(fetchArtsRequest())
        axios.get('/api/get-arts').then((resp)=>{
            console.log("ARTS GOT")
            if(resp.data.error)
            {return dispatch(fetchArtsFailure(resp.data.error))}
            dispatch(fetchArtsSuccess(resp.data.arts))
        }).catch((err)=>{
            dispatch(fetchArtsFailure(err.message))
        })
    }
}