import { Dispatch } from 'redux'
import request from '../../api'
import {
    PopularVideosAction,
    PopularVideosActionTypes
} from '../../types/popularVideos'

export const getPopularVideos =
    () => async (dispatch: Dispatch<PopularVideosAction>, getState: any) => {
        try {
            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_REQUEST
            })

            const { data } = await request('/videos', {
                params: {
                    part: 'snippet,contentDetails,statistics',
                    chart: 'mostPopular',
                    regionCode: 'ua',
                    maxResults: 15,
                    pageToken: getState().popularVideos.nextPageToken
                }
            })

            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_SUCCESS,
                payload: {
                    videos: data.items,
                    nextPageToken: data.nextPageToken,
                    activeCategory: 'All'
                }
            })
        } catch (error) {
            console.log('Get popular videos error:', error.message)

            dispatch({
                type: PopularVideosActionTypes.POPULAR_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }
