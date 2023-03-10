import {
    SearchedVideosAction,
    SearchedVideosActionTypes,
    SearchedVideosState
} from '../../types/searchedVideos'

const initialState: SearchedVideosState  = {
    loading: true,
    videos: []
}

export const searchedVideosReducer = (
    state = initialState,
    action: SearchedVideosAction
) => {
    switch (action.type) {
        case SearchedVideosActionTypes.SEARCH_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SearchedVideosActionTypes.SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        case SearchedVideosActionTypes.SEARCH_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
