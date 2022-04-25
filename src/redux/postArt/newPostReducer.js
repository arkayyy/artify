import {NEW_POST_REQUEST,NEW_POST_SUCCESS,NEW_POST_FAILURE} from './newPostTypes'

const initialState={
    loading: false,
    insertionId: [],
    error:''
}

const newPostReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case NEW_POST_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                insertionId: action.payload,
                error: ''
            }

        case NEW_POST_FAILURE:
            return{
                ...state,
                loading: false,
                insertionId: [],
                error: action.payload
            }

        default: return state
    }
}

export default newPostReducer