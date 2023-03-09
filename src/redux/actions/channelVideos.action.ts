import {
    ChannelVideosAction,
    ChannelVideosTypes
} from '../../types/chanelVideos'
import request from './../../api'
import { Dispatch } from 'redux'

export const getVideosByChannelId =
    (id: string | undefined) =>
    async (dispatch: Dispatch<ChannelVideosAction>) => {
        dispatch({
            type: ChannelVideosTypes.CHANNEL_VIDEOS_REQUEST
        })

        try {
            //? Get upload playlist id
            const {
                data: { items }
            } = await request('/channels', {
                params: {
                    part: 'contentDetails',
                    id
                }
            })

            const uploadPlaylistId =
                items[0].contentDetails.relatedPlaylists.uploads

            //? Get the videos using the Id
            const { data } = await request('/playlistItems', {
                params: {
                    part: 'contentDetails,snippet',
                    playlistId: uploadPlaylistId,
                    maxResults: 15
                }
            })

            dispatch({
                type: ChannelVideosTypes.CHANNEL_VIDEOS_SUCCESS,
                payload: data.items
            })
        } catch (error) {
            console.log(
                error.response.data,
                'Get videos by channel ID request error'
            )
            dispatch({
                type: ChannelVideosTypes.CHANNEL_VIDEOS_FAIL,
                payload: error.response.data
            })
        }
    }
