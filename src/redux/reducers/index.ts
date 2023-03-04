import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { channelDetailsReducer } from './channel.reducer'
import {
    homeVideosReducer,
    selectedVideoReducer,
    relatedVideoReducer,
    searchedVideosReducer,
    subscriptionsChannelReducer,
    channelVideosReducer
} from './video.reducer'
import { commentsListReducer } from './comments.reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentsListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})

export type RootState = ReturnType<typeof rootReducer>
