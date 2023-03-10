import {
    RelatedVideosAction,
    RelatedVideosActionTypes,
    RelatedVideosState
} from '../../types/relatedVideos'

const initialState: RelatedVideosState = {
    loading: true,
    videos: []
}

export const relatedVideoReducer = (
    state = initialState,
    action: RelatedVideosAction
) => {
    switch (action.type) {
        case RelatedVideosActionTypes.RELATED_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case RelatedVideosActionTypes.RELATED_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        case RelatedVideosActionTypes.RELATED_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
