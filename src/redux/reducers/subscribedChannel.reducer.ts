import {
    SubscribedChannelAction,
    SubscribedChannelActionTypes,
    SubscribedChannelState
} from '../../types/subscribedChannel'

const initialState: SubscribedChannelState = {
    loading: true,
    videos: []
}

export const subscribedChannelReducer = (
    state = initialState,
    action: SubscribedChannelAction
) => {
    switch (action.type) {
        case SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false
            }
        case SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
