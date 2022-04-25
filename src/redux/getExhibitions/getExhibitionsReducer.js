import {FETCH_EXHIBITIONS_REQUEST,FETCH_EXHIBITIONS_SUCCESS,FETCH_EXHIBITIONS_FAILURE} from './getExhibitionsTypes'

const initialState={
    loading: false,
    exhibitions:[],
    error:''
}

const getExhibitionsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_EXHIBITIONS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_EXHIBITIONS_SUCCESS:
            return{
                ...state,
                loading:false,
                exhibitions:action.payload,
                error:''
            }

        case FETCH_EXHIBITIONS_FAILURE:
            return{
                ...state,
                error: action.payload,
                exhibitions:[]
            }

        default: return state
    }
}
export default getExhibitionsReducer