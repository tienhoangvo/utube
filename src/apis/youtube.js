import axios from 'axios'

const KEY = 'AIzaSyBN0_xseETifMrZ_sD75xMHyCtV26K4p3c'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
})
