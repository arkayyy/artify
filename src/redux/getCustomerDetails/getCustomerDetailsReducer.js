import {FETCH_DETAILS_REQUEST,FETCH_DETAILS_SUCCESS,FETCH_DETAILS_FAILURE} from './getCustomerDetailsTypes'

const initialState={
    loading: false,
    details:{},
    error:''
}

const getCustomerDetailsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_DETAILS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_DETAILS_SUCCESS:
            return{
                ...state,
                loading:false,
                details:action.payload,
                error:''
            }

        case FETCH_DETAILS_FAILURE:
            return{
                ...state,
                error: action.payload,
                details:{}
            }

        default: return state
    }
}
export default getCustomerDetailsReducer