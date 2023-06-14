export async function fetchData(url, body, method = 'POST') {
  const headers = new Headers()

  const token = localStorage.getItem('token')
  if(token) {
    headers.append('Athorization', `Bearer ${token}`)
  }

  headers.append('Content-Type', 'application/json')

  let data
  const res = await fetch(url, {
    method: method,
    headers,
    body: JSON.stringify(body)
  })

  if (res.ok) {
    data = await res.json()
  } else {
    data = null
  }
  console.log(JSON.stringify(body))
  return data
}