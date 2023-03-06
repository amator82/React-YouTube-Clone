export enum CommentsListTypes {
    COMMENT_LIST_REQUEST = 'COMMENT_LIST_REQUEST',
    COMMENT_LIST_SUCCESS = 'COMMENT_LIST_SUCCESS',
    COMMENT_LIST_FAIL = 'COMMENT_LIST_FAIL'
}

export enum CreateCommentTypes {
    CREATE_COMMENT_SUCCESS = 'CREATE_COMMENT_SUCCESS',
    CREATE_COMMENT_FAIL = 'CREATE_COMMENT_FAIL'
}

export type CommentsListState = {
    loading: boolean
    comments: any
    error?: string | null
}

interface FetchCommentsListAction {
    type: CommentsListTypes.COMMENT_LIST_REQUEST
}

interface FetchCommentsListSuccessAction {
    type: CommentsListTypes.COMMENT_LIST_SUCCESS
    payload: any
}

interface FetchCommentsListFailAction {
    type: CommentsListTypes.COMMENT_LIST_FAIL
    payload: string
}

export type CommentsListAction =
    | FetchCommentsListAction
    | FetchCommentsListSuccessAction
    | FetchCommentsListFailAction

interface CreateCommentSuccessAction {
    type: CreateCommentTypes.CREATE_COMMENT_SUCCESS
}
interface CreateCommentFailAction {
    type: CreateCommentTypes.CREATE_COMMENT_FAIL
    payload: string
}

export type CreateCommentAction =
    | CreateCommentSuccessAction
    | CreateCommentFailAction
