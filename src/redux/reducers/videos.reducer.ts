import {
    SEARCH_VIDEOS_REQUEST,
    SEARCH_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL,
    SUBSCRIPTIONS_CHANNEL_REQUEST,
    SUBSCRIPTIONS_CHANNEL_SUCCESS,
    SUBSCRIPTIONS_CHANNEL_FAIL
} from '../actionType'

export const searchedVideosReducer = (
    state = { loading: true, videos: [] },
    action: any
) => {
    const { payload, type } = action

    switch (type) {
        case SEARCH_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SEARCH_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false
            }
        case SEARCH_VIDEOS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const subscriptionsChannelReducer = (
    state = { loading: true, videos: [] },
    action: any
) => {
    const { payload, type } = action

    switch (type) {
        case SUBSCRIPTIONS_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SUBSCRIPTIONS_CHANNEL_SUCCESS:
            return {
                ...state,
                videos: payload,
                loading: false
            }
        case SUBSCRIPTIONS_CHANNEL_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
