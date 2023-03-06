import * as AuthActionCreators from './auth.action'
import * as ChannelDetailsActionCreators from './channel.action'
import * as VideoActionCreators from './videos.action'
import * as CommentsActionCreators from './comments.action'
import * as PopularVideosActionCreators from './popularVideos.action'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    ...AuthActionCreators,
    ...ChannelDetailsActionCreators,
    ...VideoActionCreators,
    ...CommentsActionCreators,
    ...PopularVideosActionCreators
}
