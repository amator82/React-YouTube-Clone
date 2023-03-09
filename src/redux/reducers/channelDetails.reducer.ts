import {
    ChannelDetailsAction,
    ChannelDetailsState,
    ChannelTypes
} from '../../types/channelDetails'

const initialState: ChannelDetailsState = {
    loading: true,
    channel: {},
    subscriptionStatus: false
}

export const channelDetailsReducer = (
    state = initialState,
    action: ChannelDetailsAction
) => {
    switch (action.type) {
        case ChannelTypes.CHANNEL_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ChannelTypes.CHANNEL_DETAILS_SUCCESS:
            return {
                ...state,
                channel: action.payload,
                loading: false
            }
        case ChannelTypes.CHANNEL_DETAILS_FAIL:
            return {
                ...state,
                channel: null,
                loading: false,
                error: action.payload
            }
        case ChannelTypes.SET_SUBSCRIPTION_STATUS:
            return {
                ...state,
                subscriptionStatus: action.payload
            }
        default:
            return state
    }
}
