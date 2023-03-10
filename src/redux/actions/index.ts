import * as AuthActionCreators from './auth.action'
import * as ChannelDetailsActionCreators from './channelDetails.action'
import * as CategoryVideoActionCreators from './categoryVideos.action'
import * as CommentsActionCreators from './comments.action'
import * as PopularVideosActionCreators from './popularVideos.action'
import * as ChannelVideosActionCreators from './channelVideos.action'
import * as RelatedVideosActionCreators from './relatedVideos.action'
import * as SelectedVideoActionCreators from './selectedVideo.action'
import * as SearchedVideosActionCreators from './searchedVideos.action'
import * as SubscribedChannelActionCreators from './subscribedChannel.action'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...AuthActionCreators,
    ...ChannelDetailsActionCreators,
    ...CategoryVideoActionCreators,
    ...CommentsActionCreators,
    ...PopularVideosActionCreators,
    ...ChannelVideosActionCreators,
    ...RelatedVideosActionCreators,
    ...SelectedVideoActionCreators,
    ...SearchedVideosActionCreators,
    ...SubscribedChannelActionCreators
}
