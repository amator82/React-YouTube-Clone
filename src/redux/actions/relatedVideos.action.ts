import {
    RelatedVideosAction,
    RelatedVideosActionTypes
} from '../../types/relatedVideos'
import request from './../../api'
import { Dispatch } from 'redux'

export const getRelatedVideos =
    (id: string | undefined) =>
    async (dispatch: Dispatch<RelatedVideosAction>) => {
        try {
            dispatch({
                type: RelatedVideosActionTypes.RELATED_VIDEOS_REQUEST
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
                type: RelatedVideosActionTypes.RELATED_VIDEOS_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(error.response.data.message, 'Get related video error')

            dispatch({
                type: RelatedVideosActionTypes.RELATED_VIDEOS_FAIL,
                payload: error.response.data.message
            })
        }
    }
