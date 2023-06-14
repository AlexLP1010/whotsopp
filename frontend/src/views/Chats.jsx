import Chat from '../components/Chat'
import useFetch from '../helpers/useFetch'

function Chats() {
  const chats = useFetch({
    url: 'http://localhost:3000/api/v1/chat', 
    method: 'GET'
  })

  const getChats = () => {
    if (chats.loading)
      return (<>Loading...</>)

    console.log(chats)
    if (chats.error)
      return (<>Can't loading chats 😢</>)

    return (<>{
      chats.data.map(chat => <Chat chat={chat} />)
    }</>)
  }

  return (
    <div>
      {getChats()}
    </div>
  )
}

export default Chats