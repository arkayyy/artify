import {FETCH_GALLERIES_REQUEST,FETCH_GALLERIES_SUCCESS,FETCH_GALLERIES_FAILURE} from './getGalleriesTypes'

const initialState={
    loading: false,
    galleries:[],
    error:''
}

const getGalleriesReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_GALLERIES_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_GALLERIES_SUCCESS:
            return{
                ...state,
                loading:false,
                galleries:action.payload,
                error:''
            }

        case FETCH_GALLERIES_FAILURE:
            return{
                ...state,
                error: action.payload,
                galleries:[]
            }

        default: return state
    }
}
export default getGalleriesReducer