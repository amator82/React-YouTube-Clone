import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL,
    RELATED_VIDEOS_REQUEST,
    RELATED_VIDEOS_SUCCESS,
    RELATED_VIDEOS_FAIL,
    SEARCH_VIDEOS_REQUEST,
    SEARCH_VIDEOS_SUCCESS,
    SEARCH_VIDEOS_FAIL,
    SUBSCRIPTIONS_CHANNEL_REQUEST,
    SUBSCRIPTIONS_CHANNEL_SUCCESS,
    SUBSCRIPTIONS_CHANNEL_FAIL,
    CHANNEL_VIDEOS_REQUEST,
    CHANNEL_VIDEOS_SUCCESS,
    CHANNEL_VIDEOS_FAIL,
} from '../actionType'
import request from '../../api'

export const getPopularVideos = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: HOME_VIDEOS_REQUEST
        })
        const { data } = await request('/videos', {
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'ua',
                maxResults: 15,
                pageToken: getState().homeVideos.nextPageToken
            }
        })

        dispatch({
            type: HOME_VIDEOS_SUCCESS,
            payload: {
                videos: data.items,
                nextPageToken: data.nextPageToken,
                category: 'All'
            }
        })
    } catch (error) {
        console.log('Get popular videos error:', error.message)

        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
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

export const getVideoById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: SELECTED_VIDEO_REQUEST
        })

        const { data } = await request('/videos', {
            params: {
                part: 'snippet,statistics',
                id
            }
        })

        dispatch({
            type: SELECTED_VIDEO_SUCCESS,
            payload: data.items[0]
        })
    } catch (error) {
        console.log(error.message, 'Selected video error')

        dispatch({
            type: SELECTED_VIDEO_FAIL,
            payload: error.message
        })
    }
}

export const getRelatedVideos = (id) => async (dispatch) => {
    try {
        dispatch({
            type: RELATED_VIDEOS_REQUEST
        })

        const { data } = await request('/search', {
            params: {
                part: 'snippet',
                relatedVideoId: id,
                maxResults: 15,
                type: 'video'
            }
        })

        dispatch({
            type: RELATED_VIDEOS_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.response.data.message, 'Get related video error')

        dispatch({
            type: RELATED_VIDEOS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const getVideosBySearch = (keyword) => async (dispatch) => {
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

export const getSubscribedChannels = () => async (dispatch, getState) => {
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

export const getVideosByChannelId = (id) => async (dispatch) => {
    dispatch({
        type: CHANNEL_VIDEOS_REQUEST
    })

    try {
        //? Get upload playlist id
        const {
            data: { items }
        } = await request('/channels', {
            params: {
                part: 'contentDetails',
                id
            }
        })

        const uploadPlaylistId =
            items[0].contentDetails.relatedPlaylists.uploads

        //? Get the videos using the Id
        const { data } = await request('/playlistItems', {
            params: {
                part: 'contentDetails,snippet',
                playlistId: uploadPlaylistId,
                maxResults: 15
            }
        })

        dispatch({
            type: CHANNEL_VIDEOS_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(
            error.response.data,
            'Get videos by channel ID request error'
        )
        dispatch({
            type: CHANNEL_VIDEOS_FAIL,
            payload: error.response.data
        })
    }
}
