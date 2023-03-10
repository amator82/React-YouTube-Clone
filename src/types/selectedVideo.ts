import { VideoSnippetThumbnails } from './video'

export enum SelectedVideoActionTypes {
    SELECTED_VIDEO_REQUEST = 'SELECTED_VIDEO_REQUEST',
    SELECTED_VIDEO_SUCCESS = 'SELECTED_VIDEO_SUCCESS',
    SELECTED_VIDEO_FAIL = 'SELECTED_VIDEO_FAIL'
}

interface SelectedVideoSnippetLocalized {
    title: string
    description: string
}

export type SelectedVideoSnippet = {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: VideoSnippetThumbnails
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    localized: SelectedVideoSnippetLocalized
    defaultAudioLanguage: string
}

export type SelectedVideoStatistics = {
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
}

export type SelectedVideo = {
    kind: string
    etag: string
    id: string | any
    snippet: SelectedVideoSnippet
    statistics: SelectedVideoStatistics
}

export interface SelectedVideoState {
    loading: boolean
    video: any 
}

interface FetchSelectedVideoRequestAction {
    type: SelectedVideoActionTypes.SELECTED_VIDEO_REQUEST
}

interface FetchSelectedVideoSuccessAction {
    type: SelectedVideoActionTypes.SELECTED_VIDEO_SUCCESS
    payload: SelectedVideo
}

interface FetchSelectedVideoFailAction {
    type: SelectedVideoActionTypes.SELECTED_VIDEO_FAIL
    payload: string
}

export type SelectedVideoAction =
    | FetchSelectedVideoRequestAction
    | FetchSelectedVideoSuccessAction
    | FetchSelectedVideoFailAction
