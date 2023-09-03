import { FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS,FETCH_POSTS_REQUESTS } from "../action/ActionTypes";

let initialState={
    loading:true,
    data:[],
    error:null,
    history:[]
}

const postReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_POSTS_REQUESTS:
            return(
                {
                    ...state,
                    loading:true
                }
            )
        case FETCH_POSTS_SUCCESS:
            return(
                {
                    ...state,
                    loading:false,
                    data:action.payload,
                    error:null,
                    history:[...state.history,action.payload]
                    
                }
            )
        case FETCH_POSTS_FAILURE:
            return(
                {
                    ...state,
                    loading:false,
                    data:[],
                    error:action.payload,
                }
            )
        default:
            return state;        
    }
}


export default postReducer