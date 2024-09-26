import Desktop from './screens/Desktop';
import Login from './screens/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/desktop" element={<Desktop />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
