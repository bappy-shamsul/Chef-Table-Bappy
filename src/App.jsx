import { useState } from 'react'
import './App.css'
import Recipies from './components/Recipies/Recipies'
import { addToLS } from './components/utilities/various';
import Cooklists from './components/Cooklists/Cooklists';

function App() {
  const [recipies, setRecipies] = useState([]);

  const handleRecipieNum = newItem =>{
    console.log(newItem)
    setRecipies([...recipies, newItem])
    addToLS(newItem.id)
  }

  return (
    <div className='body-sub-container'>
      <Recipies handleRecipieNum={handleRecipieNum}></Recipies>
      <Cooklists recipies={recipies}></Cooklists>
    </div>
  )
}

export default App
