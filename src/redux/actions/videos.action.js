import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS,
    SELECTED_VIDEO_REQUEST,
    SELECTED_VIDEO_SUCCESS,
    SELECTED_VIDEO_FAIL
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
        console.log('Ошибка при получении данных:', error.message)

        dispatch({
            type: HOME_VIDEOS_FAIL,
            payload: error.message
        })
    }
}

export const getVideosFromCategory =
    (keyword) => async (dispatch, getState) => {
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
            console.log(error.message)
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
