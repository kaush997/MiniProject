import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from './Components/Navigationbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Search from './Pages/Search';
import SearchBiometrics from './Pages/SearchBiometrics';
import SearchResult from './Pages/SearchResult';
import Victims from './Pages/Victims';
import Captures from './Pages/Captures';
import Crime1 from './Pages/Crime1';
import Evidences from './Pages/Evidences';
import Reports from './Pages/Reports';
import Support from './Pages/Support';
import ReportResponse from './Pages/ReportResponse';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <Router>
      <nav>
      <NavigationBar />
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/SearchBiometrics" element={<SearchBiometrics/>} />
        <Route path="/SearchResult" element={<SearchResult/>} />
        <Route path="/Victims" element={<Victims/>} />
        <Route path="/Captures" element={<Captures/>} />
        <Route path="/Crime1" element={<Crime1/>} />
        <Route path="/Evidences" element={<Evidences/>} />
        <Route path="/Reports" element={<Reports/>} /> 
        <Route path="/Support" element={<Support/>} />
        <Route path="/ReportResponse" element={<ReportResponse/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />  
      </Routes>
     <footer>
     <Footer/>
     </footer>
    </Router>
  );

  
}
  
export default App;

