import { Dispatch } from 'redux'
import request from '../../api'
import { ChannelAction, ChannelTypes } from '../../types/channel'

export const getChannelDetails =
    (id: string) => async (dispatch: Dispatch<ChannelAction>) => {
        try {
            dispatch({
                type: ChannelTypes.CHANNEL_DETAILS_REQUEST
            })

            const { data } = await request('/channels', {
                params: {
                    part: 'snippet,statistics,contentDetails',
                    id
                }
            })

            dispatch({
                type: ChannelTypes.CHANNEL_DETAILS_SUCCESS,
                payload: data.items[0]
            })
        } catch (error) {
            console.log(error.response.data, 'Channel request error')

            dispatch({
                type: ChannelTypes.CHANNEL_DETAILS_FAIL,
                payload: error.response.data
            })
        }
    }

export const checkSubscriptoinStatus =
    (id: string) =>
    async (dispatch: Dispatch<ChannelAction>, getState: any) => {
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
                type: ChannelTypes.SET_SUBSCRIPTION_STATUS,
                payload: data.items.length !== 0
            })
        } catch (error) {
            console.log(
                error.response.data,
                'checkSubscriptoinStatus request error'
            )
        }
    }
