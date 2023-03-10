import request from '../../api'
import {
    PopularVideosAction,
    PopularVideosActionTypes
} from '../../types/popularVideos'
import { Dispatch } from 'redux'

export const getPopularVideosByCategory =
    (keyword: string) =>
    async (dispatch: Dispatch<PopularVideosAction>, getState: any) => {
        try {
            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_REQUEST
            })

            const { data } = await request('/search', {
                params: {
                    part: 'snippet',
                    maxResults: 15,
                    pageToken: getState().popularVideos.nextPageToken,
                    q: keyword,
                    type: 'video'
                }
            })

            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_SUCCESS,
                payload: {
                    videos: data.items,
                    nextPageToken: data.nextPageToken,
                    activeCategory: keyword
                }
            })
        } catch (error) {
            console.log(error.message, 'Get videos by category error ')
            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }
