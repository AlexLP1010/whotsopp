import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export function useAuth() {
  const auth = useContext(AuthContext)
  return auth
}

export function AuthProvaider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('token') !== null
    )

  const login = token => {
    localStorage.setItem('token', token)
    setIsAuthenticated(true)
    console.log(isAuthenticated)
  }

  const logout = () => {
    localStorage.removeItem('token')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}