import { UWH } from './video'

export enum RelatedVideosActionTypes {
    RELATED_VIDEOS_REQUEST = 'RELATED_VIDEOS_REQUEST',
    RELATED_VIDEOS_SUCCESS = 'RELATED_VIDEOS_SUCCESS',
    RELATED_VIDEOS_FAIL = 'RELATED_VIDEOS_FAIL'
}

export type RelatedVideosId = {
    kind: string
    videoId: string
}

export type RelatedVideosSnippet = {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: {
        default: UWH
        medium: UWH
        high: UWH
    }
    channelTitle: string
    liveBroadcastContent: string
    publishTime: string
}

export type RelatedVideos = {
    etag: string
    kind: string
    id: RelatedVideosId
    snippet: RelatedVideosSnippet
}

export type RelatedVideosState = {
    loading: boolean
    videos: RelatedVideos[]
}

interface FetchRelatedVideosRequestAction {
    type: RelatedVideosActionTypes.RELATED_VIDEOS_REQUEST
}

interface FetchRelatedVideosSuccessAction {
    type: RelatedVideosActionTypes.RELATED_VIDEOS_SUCCESS
    payload: RelatedVideos[]
}

interface FetchRelatedVideosFailAction {
    type: RelatedVideosActionTypes.RELATED_VIDEOS_FAIL
    payload: string
}

export type RelatedVideosAction =
    | FetchRelatedVideosRequestAction
    | FetchRelatedVideosSuccessAction
    | FetchRelatedVideosFailAction
