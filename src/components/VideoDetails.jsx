import { Embed, Segment } from 'semantic-ui-react'

const VideoDetails = ({ video }) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <Embed>
        <iframe src={videoSrc} title="video player" />
      </Embed>
      <Segment>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </Segment>
    </div>
  )
}

export default VideoDetails
