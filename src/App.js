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
import LoadingBar from 'react-top-loading-bar';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import { Notes } from './Components/Notes';

function App() {
  // For Top Loading Bar
  const [progress, setProgress] = useState(0);

  // For Alert Mesages
  const [alert, setAlert] = useState(null);

  let showAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar showAlertMsg={showAlertMsg} />
          <LoadingBar
            color='blue'
            progress={progress}
            height={3}
            transitionTime={300}
            waitingTime={1500}
            onLoaderFinished={() => setProgress(0)}
          />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlertMsg={showAlertMsg} setProgress={setProgress} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About setProgress={setProgress} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/contact" element={<Contact showAlertMsg={showAlertMsg} setProgress={setProgress} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/notes" element={<Notes showAlertMsg={showAlertMsg} setProgress={setProgress} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/login" element={<Login showAlertMsg={showAlertMsg} setProgress={setProgress} />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/signup" element={<Signup showAlertMsg={showAlertMsg} setProgress={setProgress} />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
