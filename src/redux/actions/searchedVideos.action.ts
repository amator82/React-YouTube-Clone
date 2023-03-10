import {
    SearchedVideosAction,
    SearchedVideosActionTypes
} from '../../types/searchedVideos'
import request from './../../api'
import { Dispatch } from 'redux'

export const getSearchedVideos =
    (keyword: string | undefined) =>
    async (dispatch: Dispatch<SearchedVideosAction>) => {
        try {
            dispatch({
                type: SearchedVideosActionTypes.SEARCH_VIDEOS_REQUEST
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
                type: SearchedVideosActionTypes.SEARCH_VIDEOS_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(error.message, 'Search video error')
            dispatch({
                type: SearchedVideosActionTypes.SEARCH_VIDEOS_FAIL,
                payload: error.message
            })
        }
    }
