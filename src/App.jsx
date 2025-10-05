import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
  const data = [
    {
      image: "https://images.unsplash.com/photo-1520446266423-6daca23fe8c7?q=80&w=1170&auto=format&fit=crop",
      name: "Bikhari Song"
    },
    {
      image: "https://images.unsplash.com/photo-1515010137531-66995c7f40e6?q=80&w=1174&auto=format&fit=crop",
      name: "Earpod"
    },
    {
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1170&auto=format&fit=crop",
      name: "Guitar Song"
    }
  ]

  const [songdata, setsong] = useState(data)

  return (
    <div className='w-full min-h-screen bg-zinc-300 flex flex-col'>
      <Navbar />
      <div className='flex-1 gap-10 flex items-center justify-center flex-wrap p-10'>
        {songdata.map((obj, index) => (
          <Card key={index} image={obj.image} name={obj.name} />
        ))}
      </div>
    </div>
  )
}

export default App
