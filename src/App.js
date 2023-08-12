import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './Pages/Login.js'
import Home from './Pages/Home.js'
import Main from './Pages/Main.js'
import NotFound from './Pages/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" exact={true} element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
