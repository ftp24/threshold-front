import { Routes, Route } from 'react-router-dom'
import  Home  from './components/Home'
import  Encryption  from './components/Encryption'
import  Decryption  from './components/Decryption'

import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='/encryption' element={<Encryption/>}></Route>
      <Route path='/decryption' element={<Decryption/>}></Route>
    </Routes>
    </>
  );
}

export default App;
