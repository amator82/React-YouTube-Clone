export enum PopularVideosActionTypes {
    POPULAR_VIDEOS_SUCCESS = 'POPULAR_VIDEOS_SUCCESS',
    POPULAR_VIDEOS_FAIL = 'POPULAR_VIDEOS_FAIL',
    POPULAR_VIDEOS_REQUEST = 'POPULAR_VIDEOS_REQUEST'
}

export interface PopularVideosState {
    videos: any[]
    loading: boolean
    nextPageToken: string | null
    activeCategory: string
}

interface FetchPopularVideosAction {
    type: PopularVideosActionTypes.POPULAR_VIDEOS_REQUEST
}

interface FetchPopularVideosSuccessAction {
    type: PopularVideosActionTypes.POPULAR_VIDEOS_SUCCESS
    payload: {
        videos: any[]
        nextPageToken: string
        activeCategory: string
    }
}

interface FetchPopularVideosErrorAction {
    type: PopularVideosActionTypes.POPULAR_VIDEOS_FAIL
    payload: string
}

export type PopularVideosAction =
    | FetchPopularVideosAction
    | FetchPopularVideosSuccessAction
    | FetchPopularVideosErrorAction
