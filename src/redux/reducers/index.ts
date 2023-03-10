import { combineReducers } from 'redux'
import { authReducer } from './auth.reducer'
import { getPopularVideosReducer } from './popularVideos.reducer'
import { selectedVideoReducer } from './selectedVideo.reducer'
import { channelDetailsReducer } from './channelDetails.reducer'
import { commentsListReducer } from './comments.reducer'
import { relatedVideoReducer } from './relatedVideos.reducer'
import { searchedVideosReducer } from './searchedVideos.reducer'
import { subscribedChannelReducer } from './subscribedChannel.reducer'
import { channelVideosReducer } from './channelVideos.reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    popularVideos: getPopularVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentsListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscribedChannel: subscribedChannelReducer,
    channelVideos: channelVideosReducer
})

export type RootState = ReturnType<typeof rootReducer>
