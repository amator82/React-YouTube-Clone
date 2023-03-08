import request from '../../api'
import { Dispatch } from 'redux'
import {
    CommentsListAction,
    CommentsListTypes,
    CreateCommentAction,
    CreateCommentTypes
} from '../../types/comments'

export const getCommentsOfVideoId =
    (id: any) => async (dispatch: Dispatch<CommentsListAction>) => {
        try {
            dispatch({
                type: CommentsListTypes.COMMENT_LIST_REQUEST
            })

            const { data } = await request('/commentThreads', {
                params: {
                    part: 'snippet',
                    videoId: id
                }
            })

            dispatch({
                type: CommentsListTypes.COMMENT_LIST_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(error.response.data, 'Comments request error')

            dispatch({
                type: CommentsListTypes.COMMENT_LIST_FAIL,
                payload: error.response.data.message
            })
        }
    }

export const addComment =
    (id: string | undefined, text: string) =>
    async (dispatch: Dispatch<CreateCommentAction>, getState: any) => {
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
                type: CreateCommentTypes.CREATE_COMMENT_SUCCESS
            })

            setTimeout(() => getCommentsOfVideoId(id), 3000)
        } catch (error) {
            console.log(error.response.data, 'Create comment error')

            dispatch({
                type: CreateCommentTypes.CREATE_COMMENT_FAIL,
                payload: error.response.data.message
            })
        }
    }
