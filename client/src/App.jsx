import React from 'react';
import './App.css'

function App() {
  const [messages, setMessages] = React.useState([])
  
  async function getData() {
    const res = await fetch('/api/messages')
    const data = await res.json()
    
    setMessages(data)
  }
  
  React.useEffect(() => {
    getData()
  }, [])
  
  return (
    <main className='h-screen flex flex-col items-center border-2 border-solid border-blue-200 p-10'>
      <ul className='flex flex-col flex-1'>{messages.map(({text, user, added}) => (
        <li key={added}>
          <p>{user} <span> - </span> {text} <span> @ </span> {added} </p>
        </li>
      ))}</ul>
      <form className='flex gap-4'>
        <input placeholder='Add your message here' className='border-2 border-solid border-neutral-300 rounded-lg px-2 py-1'></input>
        <button className='border-2 border-solid border-neutral-300 rounded-lg px-2 py-1'>Send</button>
      </form>
    </main>
  )
}

export default App
