import { useEffect, useState } from "react"

function useFetch({url, method, body}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const headers = new Headers()

    const token = localStorage.getItem('token')
    if(token) {
      headers.append('Authorization', `Bearer ${token}`)
    }

    headers.append('Content-Type', 'application/json')
    
    const options = {
      method: method || 'POST',
      headers
    }

    if (method !== 'GET')
      options.body = JSON.stringify(body) || ''

    fetch(url, options)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}

export default useFetch