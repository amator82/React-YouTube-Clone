import { createStore, applyMiddleware, combineReducers } from 'redux'

import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { authReducer } from './reducers/auth.reducer'
import {
    homeVideosReducer,
    selectedVideoReducer
} from './reducers/video.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer'
import { commentsListReducer } from './reducers/comments.reducer'

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentsList: commentsListReducer
})

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default store
