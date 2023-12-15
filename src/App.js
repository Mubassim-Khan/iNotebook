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

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message="This is an Alert" />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
