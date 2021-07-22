import { Image, List } from 'semantic-ui-react'
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  const onVideoItemClick = (selectedVideo) => () => {
    onVideoSelect(selectedVideo)
  }

  return (
    <List.Item
      className="video-item"
      onClick={onVideoItemClick(video)}
    >
      <Image
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <List.Content>
        <List.Header>
          {video.snippet.title}
        </List.Header>
      </List.Content>
    </List.Item>
  )
}

export default VideoItem
