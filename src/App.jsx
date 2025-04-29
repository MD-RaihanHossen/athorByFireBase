import { Outlet } from 'react-router-dom'
import './App.css'
import Hearder from './Components/Header/Hearder'
import Fotter from './Components/Fotter/Fotter'




function App() {

  return (
    <div>
      <Hearder></Hearder>
      <Outlet></Outlet>
      <div className='md:absolute right-0 left-0 bottom-0 max-w-[1280px] mx-auto'>
        <Fotter></Fotter>
      </div>
    </div>
  )
}

export default App
