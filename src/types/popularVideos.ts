import { VideoSnippetThumbnails } from './video'

export enum PopularVideosActionTypes {
    POPULAR_VIDEOS_SUCCESS = 'POPULAR_VIDEOS_SUCCESS',
    POPULAR_VIDEOS_FAIL = 'POPULAR_VIDEOS_FAIL',
    POPULAR_VIDEOS_REQUEST = 'POPULAR_VIDEOS_REQUEST'
}

interface PopularVideosSnippetLocalized {
    title: string
    description: string
}

export type PopularVideosSnippet = {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: VideoSnippetThumbnails
    channelTitle: string
    tags: string[]
    categoryId: string
    liveBroadcastContent: string
    localized: PopularVideosSnippetLocalized
    defaultAudioLanguage: string
}

export type PopularVideosContentDetails = {
    duration: string
    dimension: string
    definition: string
    caption: string
    licensedContent: boolean
    contentRating: any
    projection: string
}

export interface IPopularVideosStatistics {
    viewCount: string
    likeCount: string
    favoriteCount: string
    commentCount: string
}

export type PopularVideos = {
    kind: string
    etag: string
    id: string | any
    snippet: PopularVideosSnippet
    contentDetails: PopularVideosContentDetails | any
    statistics: IPopularVideosStatistics
}

export interface PopularVideosState {
    videos: PopularVideos[]
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
        videos: PopularVideos[]
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
