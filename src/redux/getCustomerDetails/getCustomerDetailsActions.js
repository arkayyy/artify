import axios from 'axios'
import {FETCH_DETAILS_REQUEST,FETCH_DETAILS_SUCCESS,FETCH_DETAILS_FAILURE} from './getCustomerDetailsTypes'

const fetchCustomerDetailsRequest=()=>{
    return{
        type: FETCH_DETAILS_REQUEST
    }
}

const fetchCustomerDetailsSuccess=(details)=>{
    return{
        type: FETCH_DETAILS_SUCCESS,
        payload: details
    }
}

const fetchCustomerDetailsFailure=(errMsg)=>{
    return{
        type: FETCH_DETAILS_FAILURE,
        payload: errMsg
    }
}

export const fetchCustomerDetails=(id)=>{
    //console.log(id)
    return (dispatch)=>{
        dispatch(fetchCustomerDetailsRequest())
        axios.get('/api/get-customer-details',{params:{c_id: id}}).then((resp)=>{
            //console.log("ARTS GOT")
            if(resp.data.error)
            {return dispatch(fetchCustomerDetailsFailure(resp.data.error))}
            dispatch(fetchCustomerDetailsSuccess(resp.data.details))
        }).catch((err)=>{
            dispatch(fetchCustomerDetailsFailure(err.message))
        })
    }
}