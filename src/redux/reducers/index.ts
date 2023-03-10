import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { channelDetailsReducer } from './channelDetails.reducer'
import { subscriptionsChannelReducer } from './videos.reducer'
import { commentsListReducer } from './comments.reducer'
import { getPopularVideosReducer } from './popularVideos.reducer'
import { channelVideosReducer } from './channelVideos.reducer'
import { relatedVideoReducer } from './relatedVideos.reducer'
import { selectedVideoReducer } from './selectedVideo.reducer'
import { searchedVideosReducer } from './searchedVideos.reducer'

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
