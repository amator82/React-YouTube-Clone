import * as AuthActionCreators from './auth.action'
import * as ChannelDetailsActionCreators from './channel.action'
import * as VideoActionCreators from './videos.action'
import * as CommentsActionCreators from './videos.action'
import * as PopularVideosActionCreators from './popularVideos.action'

export default {
    ...AuthActionCreators,
    ...ChannelDetailsActionCreators,
    ...VideoActionCreators,
    ...CommentsActionCreators,
    ...PopularVideosActionCreators
}
