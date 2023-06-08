import { Navigate, Routes, Route } from 'react-router';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App: React.FC  = () => {
  const { token } = useTypedSelector(state => state.auth);

  if (!localStorage.getItem('token')) localStorage.setItem('token', token);

  return (
    <Routes>
      <Route path="/" element={localStorage.getItem('token') ? <Home /> : <Navigate to="/login" replace />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
};

export default App;