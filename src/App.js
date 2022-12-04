import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import Products from './pages/Products';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import PurchasePage from './pages/PurchasePage';
function App() {
  return (
    <div className="relative">
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout><HomePage /></MainLayout>}></Route>
          <Route path='/:id' element={<MainLayout><DetailPage /></MainLayout>}></Route>
          <Route path='/products' element={<MainLayout><Products /></MainLayout>}></Route>
          <Route path='/purchase' element={<MainLayout><PurchasePage /></MainLayout>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
