import {
    SubscribedChannelAction,
    SubscribedChannelActionTypes
} from '../../types/subscribedChannel'
import request from './../../api'
import { Dispatch } from 'redux'

export const getSubscribedChannels =
    () =>
    async (dispatch: Dispatch<SubscribedChannelAction>, getState: any) => {
        dispatch({
            type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_REQUEST
        })

        try {
            const { data } = await request('/subscriptions', {
                params: {
                    part: 'snippet,contentDetails',
                    mine: true
                },
                headers: {
                    Authorization: `Bearer ${getState().auth.accessToken}`
                }
            })

            dispatch({
                type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(
                error.response.data,
                'Get subscription channel request error'
            )
            dispatch({
                type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_FAIL,
                payload: error.response.data
            })
        }
    }
