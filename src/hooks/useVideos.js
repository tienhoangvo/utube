import { useEffect, useState } from 'react'
import youtube from '../apis/youtube'

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState('idle')

  const search = (term) => {
    setStatus('loading')

    youtube
      .get('/search', {
        params: {
          q: term,
        },
      })
      .then((response) => {
        setVideos(response.data.items)
        setStatus('success')
      })
      .catch((error) => {
        setError(error)
        setStatus('error')
      })
  }

  useEffect(() => {
    if (!defaultTerm) return

    search(defaultTerm)
  }, [defaultTerm])

  return { videos, status, error, search }
}

export default useVideos
