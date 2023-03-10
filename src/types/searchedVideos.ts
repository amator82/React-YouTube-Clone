import { UWH } from './video'

export enum SearchedVideosActionTypes {
    SEARCH_VIDEOS_REQUEST = 'SEARCH_VIDEOS_REQUEST',
    SEARCH_VIDEOS_SUCCESS = 'SEARCH_VIDEOS_SUCCESS',
    SEARCH_VIDEOS_FAIL = 'SEARCH_VIDEOS_FAIL'
}

type SearchedVideoId = {
    kind: string
    videoId: string
}

type SearchedVideoThumbnails = {
    default: UWH
    medium: UWH
    high: UWH
}

export type SearchedVideo = {
    kind: string
    etag: string
    id: SearchedVideoId
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: SearchedVideoThumbnails
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
}

export interface SearchedVideosState {
    loading: boolean
    videos: SearchedVideo[]
}

interface FetchSearchedVideosRequestAction {
    type: SearchedVideosActionTypes.SEARCH_VIDEOS_REQUEST
}

interface FetchSearchedVideosSuccessAction {
    type: SearchedVideosActionTypes.SEARCH_VIDEOS_SUCCESS
    payload: SearchedVideo[]
}

interface FetchSearchedVideosFailAction {
    type: SearchedVideosActionTypes.SEARCH_VIDEOS_FAIL
    payload: string
}

export type SearchedVideosAction =
    | FetchSearchedVideosRequestAction
    | FetchSearchedVideosSuccessAction
    | FetchSearchedVideosFailAction
