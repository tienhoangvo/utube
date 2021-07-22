import { List } from 'semantic-ui-react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    )
  })

  return (
    <List divided relaxed>
      {renderedVideos}
    </List>
  )
}

export default VideoList
