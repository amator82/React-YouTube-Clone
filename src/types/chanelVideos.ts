import { IVideoSnippet, VideoSnippetResourceId } from "./video"

export enum ChannelVideosTypes {
    CHANNEL_VIDEOS_REQUEST = 'CHANNEL_VIDEOS_REQUEST',
    CHANNEL_VIDEOS_SUCCESS = 'CHANNEL_VIDEOS_SUCCESS',
    CHANNEL_VIDEOS_FAIL = 'CHANNEL_VIDEOS_FAIL'
}

export interface IChannelVideos {
    kind: string
    etag: string
    id: VideoSnippetResourceId 
    snippet: IVideoSnippet
    contentDetails: {
        videoId: string
        videoPublishedAt: string
    }
}

export type ChannelVideosState = {
    loading: boolean
    videos: IChannelVideos[]
}

interface FetchChannelVideosRequestAction {
    type: ChannelVideosTypes.CHANNEL_VIDEOS_REQUEST
}

interface FetchChannelVideosSuccessAction {
    type: ChannelVideosTypes.CHANNEL_VIDEOS_SUCCESS
    payload: IChannelVideos[]
}

interface FetchChannelVideosFailAction {
    type: ChannelVideosTypes.CHANNEL_VIDEOS_FAIL
    payload: string
}

export type ChannelVideosAction =
    | FetchChannelVideosRequestAction
    | FetchChannelVideosSuccessAction
    | FetchChannelVideosFailAction
