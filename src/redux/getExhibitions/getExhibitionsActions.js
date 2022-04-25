import axios from 'axios'
import {FETCH_EXHIBITIONS_REQUEST,FETCH_EXHIBITIONS_SUCCESS,FETCH_EXHIBITIONS_FAILURE} from './getExhibitionsTypes'

const fetchExhibitionsRequest=()=>{
    return{
        type: FETCH_EXHIBITIONS_REQUEST
    }
}

const fetchExhibitionsSuccess=(exhibitions)=>{
    return{
        type: FETCH_EXHIBITIONS_SUCCESS,
        payload: exhibitions
    }
}

const fetchExhibitionsFailure=(errMsg)=>{
    return{
        type: FETCH_EXHIBITIONS_FAILURE,
        payload: errMsg
    }
}

export const fetchExhibitions=()=>{
    return (dispatch)=>{
        dispatch(fetchExhibitionsRequest())
        axios.get('/api/get-exhibitions').then((resp)=>{
            //console.log("ARTS GOT")
            if(resp.data.error)
            {return dispatch(fetchExhibitionsFailure(resp.data.error))}
            dispatch(fetchExhibitionsSuccess(resp.data.exhibitions))
        }).catch((err)=>{
            dispatch(fetchExhibitionsFailure(err.message))
        })
    }
}