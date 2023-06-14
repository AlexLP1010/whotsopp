import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { fetchData } from "../helpers/fetchData"
import { useAuth } from "../helpers/useAuth"

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    fetchData(
      'http://localhost:3000/api/v1/user/login',
      { user_name: userName, password },
      'POST'
    )
      .then(data => {
        console.log(login)
        login(data.token)
        navigate('/chats')
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          placeholder="User name"
          required
          onChange={e => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          required
          onChange={e => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
        <Link to="/">I forget my password</Link>
      </form>
    </div>
  )
}

export default Login