import './App.css';
import { Routes, Route } from 'react-router';
import {InnerGrid8by8} from './components/playing-grid/InnerGrid8by8'


function App() {
  return(
    <Routes>
      <Route index element={<InnerGrid8by8 />} />
    </Routes>
  );

}

export default App
