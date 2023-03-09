import {
    ChannelVideosAction,
    ChannelVideosState,
    ChannelVideosTypes
} from '../../types/chanelVideos'

const initialState: ChannelVideosState = {
    loading: true,
    videos: []
}

export const channelVideosReducer = (
    state = initialState,
    action: ChannelVideosAction
) => {
    switch (action.type) {
        case ChannelVideosTypes.CHANNEL_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ChannelVideosTypes.CHANNEL_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        case ChannelVideosTypes.CHANNEL_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
