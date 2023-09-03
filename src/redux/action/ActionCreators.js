import { FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS,FETCH_POSTS_REQUESTS } from "./ActionTypes";



export const postFetching=()=>{
    return{
        type:FETCH_POSTS_REQUESTS
    }
}

export const postFetchingSuccess=(data)=>{
    return{
        type:FETCH_POSTS_SUCCESS,
        payload:data
    }
}

export const postFetchingFailure=(error)=>{
    return{
        type:FETCH_POSTS_FAILURE,
        payload:error
    }
}

