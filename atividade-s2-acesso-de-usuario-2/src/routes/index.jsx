import HomePag from '../pages/Home';
import { Cadastro } from '../pages/Cadastro';
import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard';




function RoutesMain() {
  
  return (
    <Routes>
      <Route path='/' element={<HomePag/>} />        
      <Route path='/cadastro' element={<Cadastro/>} />        
      <Route path='/dashboard' element={<Dashboard/>} />            
    </Routes>
  );
}

export default RoutesMain;