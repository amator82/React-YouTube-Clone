import {
    COMMENT_LIST_FAIL,
    COMMENT_LIST_SUCCESS,
    COMMENT_LIST_REQUEST,
    CREATE_COMMENT_SUCCESS,
    CREATE_COMMENT_FAIL
} from '../actionType'
import request from './../../api.ts'

export const getCommentsOfVideoId = (id) => async (dispatch) => {
    try {
        dispatch({
            type: COMMENT_LIST_REQUEST
        })

        const { data } = await request('/commentThreads', {
            params: {
                part: 'snippet',
                videoId: id
            }
        })

        dispatch({
            type: COMMENT_LIST_SUCCESS,
            payload: data.items
        })
    } catch (error) {
        console.log(error.response.data, 'Comments request error')

        dispatch({
            type: COMMENT_LIST_FAIL,
            payload: error.response.data.message
        })
    }
}

export const addComment = (id, text) => async (dispatch, getState) => {
    try {
        const obj = {
            snippet: {
                videoId: id,
                topLevelComment: {
                    snippet: {
                        textOriginal: text
                    }
                }
            }
        }

        await request.post('/commentThreads', obj, {
            params: {
                part: 'snippet',
                videoId: id
            },
            headers: {
                Authorization: `Bearer ${getState().auth.accessToken}`
            }
        })
        dispatch({
            type: CREATE_COMMENT_SUCCESS
        })

        setTimeout(() => dispatch(getCommentsOfVideoId(id)), 3000)
    } catch (error) {
        console.log(error.response.data, 'Create comment error')

        dispatch({
            type: CREATE_COMMENT_FAIL,
            payload: error.response.data.message
        })
    }
}
