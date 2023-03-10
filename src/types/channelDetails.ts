import { UWH } from './video'

export enum ChannelTypes {
    CHANNEL_DETAILS_REQUEST = 'CHANNEL_DETAILS_REQUEST',
    CHANNEL_DETAILS_SUCCESS = 'CHANNEL_DETAILS_SUCCESS',
    CHANNEL_DETAILS_FAIL = 'CHANNEL_DETAILS_FAIL',
    SET_SUBSCRIPTION_STATUS = 'SET_SUBSCRIPTION_STATUS'
}

export type ChannelDetailsSnippet = {
    title: string
    description: string
    customUrl: string
    publishedAt: string
    thumbnails: {
        default: UWH
        medium: UWH
        high: UWH
    }
    localized: {
        title: string
        description: string
    }
    country: string
}

export interface ChannelDetailsStatistics {
    viewCount: string
    subscriberCount: string
    hiddenSubscriberCount: boolean
    videoCount: string
}

export type ChannelDetailsContentDetails = {
    relatedPlaylists: {
        likes: string
        uploads: string
    }
}

export type ChannelDetails = {
    kind: string
    etag: string
    id: string | any
    snippet: ChannelDetailsSnippet
    contentDetails: ChannelDetailsContentDetails | any
    statistics: ChannelDetailsStatistics
}

export interface ChannelDetailsState {
    loading: boolean
    channel: any
    subscriptionStatus: boolean
}

interface FetchChannelDetailsRequestAction {
    type: ChannelTypes.CHANNEL_DETAILS_REQUEST
}

interface FetchChannelDetailsSuccessAction {
    type: ChannelTypes.CHANNEL_DETAILS_SUCCESS
    payload: ChannelDetails[]
}

interface FetchChannelDetailsErrorAction {
    type: ChannelTypes.CHANNEL_DETAILS_FAIL
    payload: string
}

interface FetchSetSubscriptionStatus {
    type: ChannelTypes.SET_SUBSCRIPTION_STATUS
    payload: boolean
}

export type ChannelDetailsAction =
    | FetchChannelDetailsRequestAction
    | FetchChannelDetailsSuccessAction
    | FetchChannelDetailsErrorAction
    | FetchSetSubscriptionStatus
