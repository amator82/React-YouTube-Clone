import {
    CHANNEL_DETAILS_REQUEST,
    CHANNEL_DETAILS_SUCCESS,
    CHANNEL_DETAILS_FAIL,
    SET_SUBSCRIPTION_STATUS
} from './../actionType'

import request from './../../api'

export const getChannelDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: CHANNEL_DETAILS_REQUEST
        })

        const { data } = await request('/channels', {
            params: {
                part: 'snippet,statistics,contentDetails',
                id
            }
        })

        dispatch({
            type: CHANNEL_DETAILS_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.response.data, 'Channel request error')

        dispatch({
            type: CHANNEL_DETAILS_FAIL,
            payload: error.response.data
        })
    }
}

export const checkSubscriptoinStatus = (id) => async (dispatch, getState) => {
    try {
        const { data } = await request('/subscriptions', {
            params: {
                part: 'snippet',
                forChannelId: id,
                mine: true
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })

        dispatch({
            type: SET_SUBSCRIPTION_STATUS,
            payload: data.items.length !== 0
        })
    } catch (error) {
        console.log(
            error.response.data,
            'checkSubscriptoinStatus request error'
        )
    }
}
