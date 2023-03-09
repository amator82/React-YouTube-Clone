import { IChannelVideos } from "./chanelVideos"

export type UWH = {
    url: string
    width: number
    height: number
}

export type VideoSnippetResourceId = {
    kind: string
    videoId: string
}

export type VideoSnippetThumbnails = {
    default: UWH
    medium: UWH
    high: UWH
    standart: UWH
    maxres: UWH
}

export interface IVideoSnippet {
    publishedAt: string
    channelId: string
    title: string
    description: string
    thumbnails: VideoSnippetThumbnails
    channelTitle: string
    playlistId: string
    position: number
    resourceId: VideoSnippetResourceId
    videoOwnerChannelTitle: string
    videoOwnerChannelId: string
}

export type VideoContentDetails = {
    videoId: string
    videoPublishedAt: string
}

export interface IVideo {
    kind: string
    etag: string
    id: VideoSnippetResourceId 
    snippet: IVideoSnippet
    contentDetails: VideoContentDetails
}

export type TVideo = IVideo | IChannelVideos