import { useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import {
  Container,
  Dimmer,
  Grid,
  GridColumn,
  GridRow,
  Loader,
  Segment,
} from 'semantic-ui-react'

import useVideos from '../hooks/useVideos'
import SearchBar from './SearchBar'
import VideoDetails from './VideoDetails'
import VideoList from './VideoList'

const App = () => {
  const { videos, status, error, search } = useVideos()
  const [selectedVideo, setSelectedVideo] =
    useState(null)

  useEffect(() => {
    if (status === 'success') {
      setSelectedVideo(videos[0])
    }

    if (status === 'loading') {
      setSelectedVideo(null)
    }

    if (status === 'error') {
      setSelectedVideo(null)
    }
  }, [status])
  return (
    <Container>
      <SearchBar onTermSubmit={search} />
      <Grid columns={2}>
        <GridRow>
          <GridColumn>
            {selectedVideo && (
              <VideoDetails video={selectedVideo} />
            )}

            {status === 'loading' && (
              <Segment>
                <Dimmer active>
                  <Loader>Loading</Loader>
                </Dimmer>
                <div
                  style={{
                    height: '300px',
                    backgroundColor: 'black',
                  }}
                />
              </Segment>
            )}
          </GridColumn>
          <GridColumn>
            <VideoList
              videos={videos}
              onVideoSelect={setSelectedVideo}
            />
          </GridColumn>
        </GridRow>
      </Grid>
    </Container>
  )
}

export default App
