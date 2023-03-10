import { UWH } from './video'

export enum SubscribedChannelActionTypes {
    SUBSCRIBED_CHANNEL_REQUEST = 'SUBSCRIBED_CHANNEL_REQUEST',
    SUBSCRIBED_CHANNEL_SUCCESS = 'SUBSCRIBED_CHANNEL_SUCCESS',
    SUBSCRIBED_CHANNEL_FAIL = 'SUBSCRIBED_CHANNEL_FAIL'
}

type SubscribedChannelSnippetResourceId = {
    kind: string
    channelId: string
}

type SubscribedChannelSnippetThumbnails = {
    default: UWH
    medium: UWH
    high: UWH
}

type SubscribedChannelSnippet = {
    publishedAt: string
    title: string
    description: string
    resourceId: SubscribedChannelSnippetResourceId
    channelId: string
    thumbnails: SubscribedChannelSnippetThumbnails
}

type SubscribedChannelContentDetails = {
    totalItemCount: number
    newItemCount: number
    activityType: string
}

export type SubscribedChannel = {
    kind: string
    etag: string
    id: string
    snippet: SubscribedChannelSnippet
    contentDetails: SubscribedChannelContentDetails
}

export interface SubscribedChannelState {
    loading: boolean
    videos: SubscribedChannel[]
}

interface FetchSubscribedChannelRequestAction {
    type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_REQUEST
}

interface FetchSubscribedChannelSuccessAction {
    type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_SUCCESS
    payload: SubscribedChannel[]
}

interface FetchSubscribedChannelFailAction {
    type: SubscribedChannelActionTypes.SUBSCRIBED_CHANNEL_FAIL
    payload: string
}

export type SubscribedChannelAction =
    | FetchSubscribedChannelRequestAction
    | FetchSubscribedChannelSuccessAction
    | FetchSubscribedChannelFailAction
