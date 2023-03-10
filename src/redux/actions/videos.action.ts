import {
    HOME_VIDEOS_FAIL,
    HOME_VIDEOS_REQUEST,
    HOME_VIDEOS_SUCCESS
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
