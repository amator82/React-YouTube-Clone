import {
    PopularVideosAction,
    PopularVideosActionTypes,
    PopularVideosState
} from '../../types/popularVideos'

const initialState: PopularVideosState = {
    loading: false,
    videos: [],
    nextPageToken: null,
    activeCategory: 'All'
}

export const getPopularVideosReducer = (
    state = initialState,
    action: PopularVideosAction
) => {
    switch (action.type) {
        case PopularVideosActionTypes.POPULAR_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PopularVideosActionTypes.POPULAR_VIDEOS_SUCCESS:
            return {
                ...state,
                videos:
                    state.activeCategory === action.payload.activeCategory
                        ? [...state.videos, ...action.payload.videos]
                        : [...action.payload.videos],
                loading: false,
                nextPageToken: action.payload.nextPageToken,
                activeCategory: action.payload.activeCategory
            }
        case PopularVideosActionTypes.POPULAR_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
