import * as AuthActionCreators from './auth.action'
import * as ChannelDetailsActionCreators from './channelDetails.action'
import * as VideoActionCreators from './videos.action'
import * as CommentsActionCreators from './comments.action'
import * as PopularVideosActionCreators from './popularVideos.action'
import * as ChannelVideosActionCreators from './channelVideos.action'
import * as RelatedVideosActionCreators from './relatedVideos.action'
import * as SelectedVideoActionCreators from './selectedVideo.action'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...AuthActionCreators,
    ...ChannelDetailsActionCreators,
    ...VideoActionCreators,
    ...CommentsActionCreators,
    ...PopularVideosActionCreators,
    ...ChannelVideosActionCreators,
    ...RelatedVideosActionCreators,
    ...SelectedVideoActionCreators
}
