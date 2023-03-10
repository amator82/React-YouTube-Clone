import {
    SelectedVideoAction,
    SelectedVideoActionTypes
} from '../../types/selectedVideo'
import request from '../../api'
import { Dispatch } from 'redux'

export const getVideoById =
    (id: any) => async (dispatch: Dispatch<SelectedVideoAction>) => {
        try {
            dispatch({
                type: SelectedVideoActionTypes.SELECTED_VIDEO_REQUEST
            })

            const { data } = await request('/videos', {
                params: {
                    part: 'snippet,statistics',
                    id
                }
            })

            dispatch({
                type: SelectedVideoActionTypes.SELECTED_VIDEO_SUCCESS,
                payload: data.items[0]
            })
        } catch (error) {
            console.log(error.message, 'Selected video error')

            dispatch({
                type: SelectedVideoActionTypes.SELECTED_VIDEO_FAIL,
                payload: error.message
            })
        }
    }
