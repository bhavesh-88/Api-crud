import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import UserData from './UserData';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import USeradd from './Useradd';
import UserDetail from './UserDetail';
import UserEdit from './UserEdit';

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <h1>CRUD</h1>
      <Routes>
        <Route path='/' element={<UserData/>}></Route>
        <Route path='/useradd' element={<USeradd/>}></Route>
        <Route path='/userdetail/:userid' element={<UserDetail/>}></Route>
        <Route path='/useredit/:userid' element={<UserEdit/>}></Route>
      </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
