import {
    SelectedVideoAction,
    SelectedVideoActionTypes,
    SelectedVideoState
} from '../../types/selectedVideo'

const initialState: SelectedVideoState = {
    loading: true,
    video: null
}

export const selectedVideoReducer = (
    state = initialState,
    action: SelectedVideoAction
) => {
    switch (action.type) {
        case SelectedVideoActionTypes.SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SelectedVideoActionTypes.SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: action.payload,
                loading: false
            }
        case SelectedVideoActionTypes.SELECTED_VIDEO_FAIL:
            return {
                ...state,
                video: {},
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
