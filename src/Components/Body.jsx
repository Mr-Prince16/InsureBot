import React from 'react'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Navbar from './Navbar'

const Body = () => {
  return (
    // <div className="flex justify-center h-screen">
    // <div className="flex w-full max-xl">
    //     <Sidebar>
    //     </Sidebar> 
    //     <ChatArea>
    //     </ChatArea>
    // </div>
    // </div>
    <div>
    <Navbar />
    <div className="flex flex-1">
      <Sidebar />
      <ChatArea />
    </div>
  </div>
  )
}

export default Body