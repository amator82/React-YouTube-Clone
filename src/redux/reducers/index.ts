import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { channelDetailsReducer } from './channel.reducer'
import {
    selectedVideoReducer,
    relatedVideoReducer,
    searchedVideosReducer,
    subscriptionsChannelReducer,
    channelVideosReducer
} from './videos.reducer'
import { commentsListReducer } from './comments.reducer'
import { getPopularVideosReducer } from './popularVideos.reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    popularVideos: getPopularVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentsListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})

export type RootState = ReturnType<typeof rootReducer>
