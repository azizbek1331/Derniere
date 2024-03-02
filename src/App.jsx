import './App.scss';
import Showcase from './components/Showcase'
import { Routes, Route } from 'react-router-dom'
import AdminPanel from './pages/sb-upw/adminPanel';


function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Showcase />}></Route>
          <Route path='/sb-upw' element={<AdminPanel />}></Route>
        </Routes>
    </>

  )
}

export default App
