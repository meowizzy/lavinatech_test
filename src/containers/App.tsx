import { Navigate, Routes, Route } from 'react-router';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import { useTypedSelector } from '../hooks/useTypedSelector';

const App: React.FC  = () => {
  const { token } = useTypedSelector(state => state.auth.info);

  return (
    <Routes>
      <Route path="/" element={token.length ? <Home /> : <Navigate to="/login" replace />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  )
};

export default App;