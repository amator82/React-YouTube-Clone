import {
    CommentsListState,
    CommentsListAction,
    CommentsListTypes
} from '../../types/comments'

const initialState: CommentsListState = {
    loading: true,
    comments: null,
    error: null
}

export const commentsListReducer = (
    state = initialState,
    action: CommentsListAction
) => {
    switch (action.type) {
        case CommentsListTypes.COMMENT_LIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CommentsListTypes.COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        case CommentsListTypes.COMMENT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}
