import './App.css';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import { About } from './Components/About';
import NoteState from './Context/notes/NoteState';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import { Alert } from './Components/Alert';
import { Login } from './Components/Login';
import { Signup } from './Components/Signup';
import { useState } from 'react';

function App() {
  // For Alert Mesages

  const [alert, setAlert] = useState(null);

  let showAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlertMsg={showAlertMsg} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/login" element={<Login showAlertMsg={showAlertMsg} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/signup" element={<Signup showAlertMsg={showAlertMsg} />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
