import './App.css';
import DoctorLogin from './Components/DoctorLogin.jsx'
import DoctorRegister from './Components/DoctorRegister.jsx'
import Home from './Components/Home'
import Profile from './Components/PatientProfile/Profile';
import Reports from './Components/Reports';
import Register from './Components/PatientRegisteration/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<DoctorLogin />} />
        <Route path="/login" element={<DoctorLogin />} />
        <Route path="/register" element={<DoctorRegister />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/patientregister' element={<Register/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
