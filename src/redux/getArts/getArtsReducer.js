import {FETCH_ARTS_REQUEST,FETCH_ARTS_SUCCESS,FETCH_ARTS_FAILURE} from './getArtsTypes'

const initialState={
    loading: false,
    arts:[],
    error:''
}

const getArtsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_ARTS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_ARTS_SUCCESS:
            return{
                ...state,
                loading:false,
                arts:action.payload,
                error:''
            }

        case FETCH_ARTS_FAILURE:
            return{
                ...state,
                error: action.payload,
                arts:[]
            }

        default: return state
    }
}
export default getArtsReducer