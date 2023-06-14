import { Route, Routes } from "react-router-dom"
import Login from "./views/Login"
import Chats from "./views/Chats"
import Home from "./views/Home"
import ProtectedRoute from "./helpers/ProtectedRoute"

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chats" element={<ProtectedRoute><Chats /></ProtectedRoute>} />
    </Routes>
  )
}

export default App
