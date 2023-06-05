import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Form from './Form';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/form' Component={Form} />
      </Routes>
    </div>
  );
}

export default App;
