import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_REQUEST,
    SEARCH_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL,
    SUBSCRIPTIONS_CHANNEL_REQUEST,
    SUBSCRIPTIONS_CHANNEL_SUCCESS,
    SUBSCRIPTIONS_CHANNEL_FAIL
} from '../actionType'
import request from '../../api'

export const getVideosByCategory =
    (keyword: any) => async (dispatch: any, getState: any) => {
        try {
            dispatch({
                type: HOME_VIDEOS_REQUEST
            })

            const { data } = await request('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 15,
                    pageToken: getState().homeVideos.nextPageToken,
                    q: keyword,
                    type: 'video'
                }
            })

            dispatch({
                type: HOME_VIDEOS_SUCCESS,
                payload: {
                    videos: data.items,
                    nextPageToken: data.nextPageToken,
                    category: keyword
                }
            })
        } catch (error) {
            console.log(error.message, 'Get videos by category error ')
            dispatch({
                type: HOME_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }

export const getVideosBySearch = (keyword: any) => async (dispatch: any) => {
    try {
        dispatch({
            type: SEARCH_VIDEOS_REQUEST
        })

        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                maxResults: 15,
                q: keyword,
                type: 'video,channel'
            }
        })

        dispatch({
            type: SEARCH_VIDEOS_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.message, 'Search video error')
        dispatch({
            type: SEARCH_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

export const getSubscribedChannels =
    () => async (dispatch: any, getState: any) => {
        dispatch({
            type: SUBSCRIPTIONS_CHANNEL_REQUEST
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
                type: SUBSCRIPTIONS_CHANNEL_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(
                error.response.data,
                'Get subscription channel request error'
            )
            dispatch({
                type: SUBSCRIPTIONS_CHANNEL_FAIL,
                payload: error.response.data
            })
        }
    }
