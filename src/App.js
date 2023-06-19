import { Route, Routes } from 'react-router-dom';
import Login from './Login';
// import MeetForm from './Form'
import TableData from './TableData';
import Demo from './Demo';
import DataForm from './Demo'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/form' Component={DataForm} initialValues={{ firstName: "Suman" }} />
        <Route path='/table' Component={TableData} />
      </Routes>
    </div>
  );
}

export default App;
